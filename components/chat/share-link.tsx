import { Input } from "../ui/input";
import { Dialog, DialogHeader, DialogTitle, DialogTrigger, DialogContent, DialogDescription, DialogFooter, DialogClose } from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label"
import { Dispatch, SetStateAction } from "react"


//import { ToastAction } from "../ui/toast";
//import { useToast } from "../ui/use-toast";

import { Copy } from "lucide-react";
import { toast } from "sonner";

function ShareLink({
    isOpen,
    chatId,
    setIsOpen,
}: {
    isOpen: boolean;
    chatId: string;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {


    //const {toast} = useToast();
    const host = window.location.host;

    const linkToChat = process.env.NODE_ENV === "development" 
        ? `http://${host}/chat/${chatId}`
        : `http://${host}/chat/${chatId}`;

        async function copyToClipboard(){
            try{
                await navigator.clipboard.writeText(linkToChat);
                console.log("Text copied to clipboard");

                toast.success("Copied Successfully",{

                    description: "Share this to the person you want to chat with! (Note: They must be added to the Chat to access it!)",
                    className: "bg-green-600 text-white",
                });

            } catch (err){
                console.error("Failed to copy text: ", err);
                toast.error("Failed to copy text",{
                    description: "Something went wrong trying to copy the text",
                    className: "bg-green-600 text-white",
                });
            }
        }

  return (
    
        <Dialog open={isOpen} onOpenChange={(open)=> setIsOpen(open)} defaultOpen={isOpen}>
            <DialogTrigger asChild>
                <Button variant={"outline"}>
                    <Copy className="mr-1"/>
                    Share Link
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-slate-100 dark:bg-slate-900">
                <DialogHeader>
                    <DialogTitle>Share Link</DialogTitle>
                    <DialogDescription>
                        Any user who has been{" "}
                        <span className="text-indigo-600 font-bold">
                            granted access
                        </span>{" "}
                        can use this link
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid felx-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        <Input id="link" defaultValue={linkToChat} readOnly />
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

export default ShareLink