"use client";

import {MessageSquarePlusIcon} from "lucide-react"
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useSubscriptionStore } from "@/store/store";
import { useSession } from "next-auth/react";
import { useState } from "react"
//import { useToast } from "./ui/use-toast";
import LoadingSpinner from "./loading-spinnner";
import { v4 as uuidv4 } from "uuid";
import { getDocs, serverTimestamp, setDoc } from "firebase/firestore";
import { addChatRef, chatMembersCollectionGroupRef } from "@/lib/converters/chat-members";
//import { ToastAction } from "./ui/toast";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const CreateChatButton = ({isLarge}:{isLarge?: boolean }) => {

    const { data: session } = useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    //const {toast} = useToast();
    const subscription = useSubscriptionStore((state) => state.subscription);

    const createNewChat = async() => {

        if (!session?.user.id) return;

        setLoading(true);

        toast("Creating new chat...",{
          description: "Hold tight while we create your new chat...",
          duration: 3000,
        });

        //Check if user is pro and limit them to new chats of 3
        const noOfChats = (
          await getDocs(chatMembersCollectionGroupRef(session.user.id))
          ).docs.map((doc) => doc.data()).length;
          
        const isPro = subscription?.role === "pro" && subscription.status === "active";
        
          if (!isPro && noOfChats >=3 ){
            toast.error("Free plan limit exceeded", {
              description: "You have exceeded the limit of chats for the Free plan. Please upgrade to PRO to continue adding users to chats",
              action: {
                label: "Upgrade",
                onClick: () => router.push("/register"),
              },
            })
            

            setLoading(false);
            
            return;
          }


        const chatId = uuidv4();

        //Create Chat
        //setDoc is useful in a collection if we know the id already
        await setDoc(addChatRef(chatId, session.user.id), {
          userId: session.user.id!,
          email: session.user.email!,
          timestamp: serverTimestamp(),
          isAdmin: true, //creating chat therefore admin
          chatId: chatId,
          image: session.user.image || "",
        }).then(()=> {
          //push user to new chat they created
          toast.success("Success!", {
            description: "Your chat has been created!",
            className: "bg-green-600 text-white",
            duration: 2000,
          })
          router.push(`/chat/${chatId}`)
        }).catch(()=>{
          toast.error("Something went wrong", {
            description: "There was an error creating your chat",
            duration: 2000,
          })
        }).finally(()=>{
          setLoading(false);
        });

    };

  if (isLarge)
  return (
    <div>
            <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger >
                      <Button onClick={createNewChat}>{loading ? <LoadingSpinner/> : "Create a New Chat"}</Button>
                  </TooltipTrigger>
                      <TooltipContent className="bg-white text-black">
                        <p>Create Chat</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
            
            
    </div>
  )

  return (

            <Button onClick={createNewChat} variant={"ghost"}><MessageSquarePlusIcon/></Button>
            
  )
}

export default CreateChatButton