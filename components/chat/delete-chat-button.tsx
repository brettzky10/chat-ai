"use client";

import { useState } from "react";
import { Dialog, DialogHeader, DialogTitle, DialogTrigger, DialogContent, DialogDescription, DialogFooter, DialogClose } from "../ui/dialog";
import { Button } from "../ui/button";

import  {useSession} from "next-auth/react";
import { useRouter } from "next/navigation";
import useAdminId from "@/hooks/useAdminId";
import { Dispatch, SetStateAction } from "react"


import { ToastAction } from "../ui/toast";
import { useToast } from "../ui/use-toast";

import { Copy } from "lucide-react";

function DeleteChatButton({ chatId }:{ chatId: string}) {
const { data: session } = useSession();
const [open, setOpen] = useState(false);
const {toast} = useToast();
const router = useRouter();
const adminId = useAdminId({ chatId });


    const handleDelete = async ()=>{
        toast({
            title: "Deleting chat",
            description: "Please wait while we delete the chat...",
        });
        console.log("Deleting :: ", chatId);

        await fetch("/api/chat/delete", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ chatId: chatId}),
        }).then((res) => {
            toast({
                title: "Success",
                description: "Your chat has been deleted!",
                className: "bg-green-600 text-white",
                duration: 3000,

            });
            //This makes sure the user cannot go back:
            router.replace(`/chat`);
            
        }).catch((err)=>{
            console.error(err.message);
            toast({
                title: "Error",
                description: "An error occured deleting your chat",
                variant: "destructive",
            });
        }).finally(()=> setOpen(false));
    }


  return ( 
    session?.user.id === adminId && (
    <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={"destructive"}>
                    <Copy className="mr-1"/>
                    Delete Chat
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-slate-900">
                <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>
                        This will delete this chat for all users.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 space-x-2">

                    
                    <Button variant={"destructive"} onClick={handleDelete}>
                        Delete
                    </Button>
                    <Button variant={"outline"} onClick={()=>{setOpen(false)}}>
                        Cancel
                    </Button>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        )
  ) 
}

export default DeleteChatButton