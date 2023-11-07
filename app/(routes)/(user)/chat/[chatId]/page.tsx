import { authOptions } from "@/auth"
import AdminControls from "@/components/chat/admin-controls";
import ChatInput from "@/components/chat/chat-input";
import ChatMemberBadges from "@/components/chat/chat-member-badges";
import ChatMessages from "@/components/chat/chat-messages";
import GenerateButton from "@/components/chat/generate-button";
import { Button } from "@/components/ui/button";
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
    <>
      <GenerateButton/>
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
    </>
  )
}

export default ChatPage