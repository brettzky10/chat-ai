import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { getDocs } from "firebase/firestore";
import { chatMembersCollectionGroupRef } from "@/lib/converters/chat-members";
import ChatListRows from "./chat-list-rows";

async function ChatList(){
    const session = await getServerSession(authOptions);

    //Use query link setup in firestore for userId
    const chatsSnapshot = await getDocs(chatMembersCollectionGroupRef(session?.user.id!));
    //Map through chats that come back
    const initialChats = chatsSnapshot.docs.map((doc) => ({
        ...doc.data(), //map
        timestamp: null, //Make sure to undo before production (throws error over timestamp)
    }));


    return (
        <div>
            ChatList
            <ChatListRows initialChats={initialChats}/>
        </div>
    )
}

export default ChatList