"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {getDocs, serverTimestamp, setDoc} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { PlusCircleIcon } from "lucide-react";
import { useRouter} from "next/navigation";

import { ToastAction } from "../ui/toast";
import { useToast } from "../ui/use-toast";
import { useSubscriptionStore } from "@/store/store";
//import { ShareLink } from "../ShareLink";
import useAdminId from "@/hooks/useAdminId";
import { getUserByEmailRef } from "@/lib/converters/users";
import { addChatRef, chatMembersRef } from "@/lib/converters/chat-members";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Dialog, DialogHeader, DialogTitle, DialogTrigger, DialogContent, DialogDescription } from "../ui/dialog";
import { Button } from "../ui/button";

const formSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
});


function InviteUser({ chatId }: {chatId: string}) {

    const { data: session } = useSession();
    const { toast } = useToast();
    const adminId = useAdminId({ chatId });
    const subscription = useSubscriptionStore((state) => state.subscription);
    const router = useRouter();

    const [open, setOpen] = useState(false);
    const [openInviteLink, setOpenInviteLink] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>){
        if (!session?.user.id) return;

        toast({
            title: "Sending invite",
            description: "Please wait while we send the invite"
        });

        //We need to get users current chats to check if theyre about to exceed the PRO plan
        const noOfUsersInChat = (await getDocs(chatMembersRef(chatId))).docs.map(
            (doc) => doc.data()
        ).length;

        //Check if the user is about to exceed the PRO plan which is 3 chats
        const isPro = subscription?.role === "pro" && subscription.status === "active";

        if (!isPro && noOfUsersInChat >= 2){
            toast({
                title: "Free plan limit exceeded",
                description: "You have exceeded the limit of users in a single chat for the FREE plan. Please upgrade to PRO to continue adding users to chats!",
                variant: "destructive",
                action: (
                    <ToastAction
                        altText="Upgrade"
                        onClick={()=> router.push("/register")}
                    >
                        Upgrade to PRO
                    </ToastAction>
                ),
            });

            return;
        }


    }

  return (
    
    adminId === session?.user.id && (
        <>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button>
                        <PlusCircleIcon className="mr-1"/>
                        Add User to Chat
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Add User to Chat</DialogTitle>
                        <DialogDescription>
                            Simply enter another user&apos;s email address to invite them to this chat!{" "}
                            <span className="text-indigo-600 font-bold">
                                (Note: they must be registered)
                            </span>
                        </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="flex flex-col space-y-2"
                        >
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="john@doe.com" {...form}/>
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <Button className="ml-auto sm:w-fit w-full" type="submit">
                                Add To Chat
                            </Button>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>

            {/** 
            <ShareLink
                isOpen={openInviteLink}
                setIsOpen={setOpenInviteLink}
                chatId={chatId}
            /> */}
        </>
    )
  );
}

export default InviteUser;