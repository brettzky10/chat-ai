import { Input } from "../ui/input";
import { Dialog, DialogHeader, DialogTitle, DialogTrigger, DialogContent, DialogDescription, DialogFooter, DialogClose } from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label"
import { Dispatch, SetStateAction } from "react"


import { ToastAction } from "../ui/toast";
import { useToast } from "../ui/use-toast";

import { Copy } from "lucide-react";

function CopyToChat({
    isOpen,
    chatId,
    setIsOpen,
}: {
    isOpen: boolean;
    chatId: string;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {


    const {toast} = useToast();
    
    /*
    const host = window.location.host;

    
    const linkToMedia = process.env.NODE_ENV === "development" 
        ? `http://${host}/chat/${chatId}`
        : `http://${host}/chat/${chatId}`; */

        async function copyToClipboard(){
            try{
                //await navigator.clipboard.writeText(host);
                console.log("Text copied to clipboard");

                toast({
                    title: "Copied Successfully",
                    description: "Share this to the person you want to chat with! (Note: They must be added to the Chat to access it!)",
                    className: "bg-green-600 text-white",
                });

            } catch (err){
                console.error("Failed to cpoy text: ", err);
            }
        }

  return (
    
        <Dialog open={isOpen} onOpenChange={(open)=> setIsOpen(open)} defaultOpen={isOpen}>
            <DialogTrigger asChild>
                <Button variant={"outline"}>
                    <Copy className="mr-1"/>
                    Copy Link
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-slate-100 dark:bg-slate-900">
                <DialogHeader>
                    <DialogTitle>Copy Link</DialogTitle>
                    <DialogDescription>
                        Send to chat{" "}
                        <span className="text-indigo-600 font-bold">
                            with the link
                        </span>{" "}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid felx-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        <Input id="link" defaultValue={"link goes here"} readOnly />
                    </div>
                    <Button type="submit" onClick={()=>copyToClipboard()} size="sm" className="px-3">
                        <span className="sr-only">Copy</span>
                        <Copy className="h-4 w-4"/>
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
}

export default CopyToChat