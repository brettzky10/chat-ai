import { authOptions } from "@/auth"
import AdminControls from "@/components/chat/admin-constrols";
import ChatInput from "@/components/chat/chat-input";
import ChatMemberBadges from "@/components/chat/chat-member-badges";
import ChatMessages from "@/components/chat/chat-messages";
import { sortedMessagesRef } from "@/lib/converters/message";
import { getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth"

type Props = {
  params: {
    chatId: string;
  };
};


async function ChatPage({ params: {chatId}}: Props) {

  const session = await getServerSession(authOptions);

  const initialMessages = (await getDocs(sortedMessagesRef(chatId))).docs.map(doc => doc.data());


  return (
    <>
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