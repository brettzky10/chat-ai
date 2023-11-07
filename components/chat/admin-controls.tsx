import { BrushIcon } from "lucide-react"
import { Button } from "../ui/button"
import DeleteChatButton from "./delete-chat-button"
import InviteUser from "./invite-user"

function AdminControls({ chatId }: {chatId: string}) {
  return (
    <div className='flex flex-row justify-end space-x-2 m-5 mb-0'>
        <InviteUser chatId={chatId}/>
        <DeleteChatButton chatId={chatId}/> 
    </div>
  )
}

export default AdminControls