"use client";

import {MessageSquarePlusIcon} from "lucide-react"
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useSubscriptionStore } from "@/store/store";
import { useSession } from "next-auth/react";
import { useState } from "react"
import { useToast } from "./ui/use-toast";
import LoadingSpinner from "./loading-spinnner";
import { v4 as uuidv4 } from "uuid";
import { serverTimestamp, setDoc } from "firebase/firestore";
import { addChatRef } from "@/lib/converters/chat-members";

const CreateChatButton = ({isLarge}:{isLarge?: boolean }) => {

    const { data: session } = useSession();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const {toast} = useToast();
    const subscription = useSubscriptionStore((state) => state.subscription);

    const createNewChat = async() => {

        if (!session?.user.id) return;

        setLoading(true);
        toast({
          title: "Creating new chat...",
          description: "Hold tight while we create your new chat...",
          duration: 3000,
        });

        //Check if user is pro and limit them to new chat

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
          toast({
            title: "Success",
            description: "Your chat has been created!",
            className: "bg-green-600 text-white",
            duration: 2000,
          });
          router.push(`/chat/${chatId}`);
        }).catch(()=>{
          toast({
            title: "Error",
            description: "There was an error creating your chat",
            variant:"destructive",
            duration: 2000,
          });
        }).finally(()=>{
          setLoading(false);
        });

    };

  if (isLarge)
  return (
    <div>
      <Button>
        {loading ? <LoadingSpinner/> : "Create a New Chat"}
      </Button>
    </div>
  )

  return (
    <Button onClick={createNewChat} variant={"ghost"}>
        <MessageSquarePlusIcon/>
    </Button>
  )
}

export default CreateChatButton