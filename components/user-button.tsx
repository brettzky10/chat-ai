"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import UserAvatar from "./user-avatar";
import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { useSubscriptionStore } from "@/store/store";
import LoadingSpinner from "./loading-spinnner";
import {StarIcon} from "lucide-react"
import ManageAccountButton from "./manage-account-button";
  

export const UserButton = ({ session }:{ session: Session | null}) => {

  const subscription = useSubscriptionStore((state) => state.subscription);

  if (!session) return (
    <Button variant={'outline'} onClick={() => signIn()}>
      Sign In
    </Button>
  );

  return session && (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <UserAvatar name={session.user?.name} image={session.user?.image} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel className="flex flex-row gap-x-1 items-center">
              {session.user?.name}
              <span>
              {subscription?.role === "pro" && (
                <StarIcon fill="#E935C1" className="h-3 w-3"/>
              )}
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            {subscription === undefined && (
              <DropdownMenuItem>
                <LoadingSpinner/>
              </DropdownMenuItem>
            )}

            {subscription?.role === "pro" && (
              <>
                <DropdownMenuLabel className="text-xs flex items-center justify-center space-x-1 text-[#E935C1] animate-pulse">
                  <StarIcon fill="#E935C1"/>
                  <p>PRO</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                  <ManageAccountButton/>
                </DropdownMenuItem>
              </>
            )}

            <DropdownMenuItem onClick={() => signOut()}>Sign Out</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>

  )
}
