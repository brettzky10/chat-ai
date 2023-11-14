import { Liveblocks } from "@liveblocks/node";
import { NextRequest } from "next/server";
import { ChatMembers, chatMembersRef } from "@/lib/converters/chat-members"
import { useCollectionData } from "react-firebase-hooks/firestore"
import LoadingSpinner from "@/components/loading-spinnner";
import { Session } from "next-auth";

// Authenticating your Liveblocks application
// https://liveblocks.io/docs/rooms/authentication/access-token-permissions/nextjs


type Props = {
  params: {
    chatId: string;
  };
};

const API_KEY = process.env.LIVEBLOCKS_SECRET_KEY;

const liveblocks = new Liveblocks({
  secret: API_KEY!,
});


//Current User:

//Is the user a member of chat?

// If they are, we allow them access to liveblocks room

//userId is: 

export async function POST({ session, request, chatId}:{request: NextRequest, session: Session | null, chatId: string }) {
  // Get the current user's unique id from your database
  //const userId = Math.floor(Math.random() * 10000);
  const userId = session?.user?.id;

  //Get Members from FireStore:
  const [members, loading, error] = useCollectionData<ChatMembers>(
    chatMembersRef(chatId)
);
  // Create a session for the current user
  // userInfo is made available in Liveblocks presence hooks, e.g. useOthers
  const sessionLiveBlocks = liveblocks.prepareSession(`user-${userId}`, {
    //userInfo: ;    
    userInfo: USER_INFO[Math.floor(Math.random() * 10) % USER_INFO.length],
    
  });

  // Give the user access to the room
  const { room } = await request.json();
  sessionLiveBlocks.allow(room, sessionLiveBlocks.FULL_ACCESS);

  // Authorize the user and return the result
  const { body, status } = await sessionLiveBlocks.authorize();
  return new Response(body, { status });
}

const userData = [
  
];

const USER_INFO = [
  {
    name: "Charlie Layne",
    color: "#D583F0",
    picture: "https://liveblocks.io/avatars/avatar-1.png",
  },
  {
    name: "Mislav Abha",
    color: "#F08385",
    picture: "https://liveblocks.io/avatars/avatar-2.png",
  },
  {
    name: "Tatum Paolo",
    color: "#F0D885",
    picture: "https://liveblocks.io/avatars/avatar-3.png",
  },
  {
    name: "Anjali Wanda",
    color: "#85EED6",
    picture: "https://liveblocks.io/avatars/avatar-4.png",
  },
  {
    name: "Jody Hekla",
    color: "#85BBF0",
    picture: "https://liveblocks.io/avatars/avatar-5.png",
  },
  {
    name: "Emil Joyce",
    color: "#8594F0",
    picture: "https://liveblocks.io/avatars/avatar-6.png",
  },
  {
    name: "Jory Quispe",
    color: "#85DBF0",
    picture: "https://liveblocks.io/avatars/avatar-7.png",
  },
  {
    name: "Quinn Elton",
    color: "#87EE85",
    picture: "https://liveblocks.io/avatars/avatar-8.png",
  },
];
