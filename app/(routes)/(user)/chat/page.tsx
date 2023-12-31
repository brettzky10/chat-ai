import ChatList from "@/components/chat/chat-list";
import ChatPermissionError from "@/components/chat/chat-permission-error";

type Props = {
    params: {};
    searchParams: {
        error: string;
    }
}


function ChatsPage({ searchParams: {error}}: Props) {
  return (
    <div className="max-w-4xl mx-auto pt-12">
        {error && (
          <div className="m-2">
            <ChatPermissionError />
          </div>
        )}
        <ChatList/>
    </div>
  )
}

export default ChatsPage