import { authOptions } from "@/auth"
import AdminControls from "@/components/chat/admin-controls";
import ChatInput from "@/components/chat/chat-input";
import ChatMemberBadges from "@/components/chat/chat-member-badges";
import ChatMessages from "@/components/chat/chat-messages";
import GenerateButton from "@/components/chat/generate-button";
import SolveButton from "@/components/chat/solve-button";
import { Card, CardContent } from "@/components/ui/card";
import { chatMembersRef } from "@/lib/converters/chat-members";
import { sortedMessagesRef } from "@/lib/converters/message";
import { getDocs } from "firebase/firestore";
import { Brush } from "lucide-react";
import { getServerSession } from "next-auth"
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = {
  params: {
    chatId: string;
  };
};


async function ChatPage({ params: {chatId}}: Props) {


  const session = await getServerSession(authOptions);

  const initialMessages = (await getDocs(sortedMessagesRef(chatId))).docs.map(doc => doc.data());

  //Is this user logged into this chat?
  const hasAccess = (await getDocs(chatMembersRef(chatId))).docs.map((doc)=> doc.id).includes(session?.user.id!);

  if (!hasAccess) redirect("/chat?error=permission")

  return (
    <div className="bg-transparent h-full">
      <div  className="h-full sticky top-0 overflow-y-auto w-0 mx-auto max-w-7xl">
        
      {/* <div className="flex rounded-xl bg-white/30">
            <GenerateButton/>
             <SolveButton/> 
          </div>  */}
      </div>
      <div className="w-full md:max-w-7xl mx-auto md:w-2/3 md:items-center h-full sticky top-0 overflow-y-auto">
          <AdminControls chatId={chatId}/>
          <ChatMemberBadges chatId={chatId}/>

          <div className="flex-1">
            <ChatMessages
              chatId={chatId}
              session={session}
              initialMessages={initialMessages}
              />
          </div>
          <ChatInput chatId={chatId} />

      </div>
      
    </div>
  )
}

export default ChatPage