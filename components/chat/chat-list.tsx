import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
import { getDocs } from "firebase/firestore";
import { chatMembersCollectionGroupRef } from "@/lib/converters/chat-members";
import ChatListRows from "./chat-list-rows";
import { Card } from "../ui/card";

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
            <h1 className="px-5 py-5 text-xl lg:text-3xl font-black text-gray-300">My Chats:</h1>
            <Card className="shadow-xl p-5 lg:p-10">
                <ChatListRows initialChats={initialChats}/>
            </Card>
            
        </div>
    )
}

export default ChatList