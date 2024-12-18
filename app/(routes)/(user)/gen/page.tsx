'use client'
import CopyToChat from '@/components/gen/copy-to-chat'
import LoadingSpinner from '@/components/loading-spinnner'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
//import { useToast } from '@/components/ui/use-toast'
import {toast} from "sonner"
import { useSubscriptionStore } from '@/store/store'
import { ArrowLeft } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'


type Props = {
  params: {
    chatId: string;
  };
};


function GeneratePage({ params: {chatId}}: Props) {
  
  //Dialog
  const [open, setOpen] = useState(false);
    const [openInviteLink, setOpenInviteLink] = useState(false);

  //Store
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  //const {toast} = useToast();
  const subscription = useSubscriptionStore((state) => state.subscription);
    //Api navigation
    const [input, setInput] = useState('')
    const [image, setImage] = useState('')
    const [audio, setAudio] = useState('')
    const [video, setVideo] = useState('')
    const [text, setText] = useState('')
    
    async function callApi() {

      if (!session?.user.id){
        toast.error("Permission Denied",{
          
          description: "You are not authorized for this action",
          duration: 3000,
        });
        return;
      } 

      setLoading(true);
        toast("Generating...", {
          description: "Hold tight while we create your prompt...",
          duration: 3000,
        });

      try {
        if (!input) return
        setImage('')
        setAudio('')
        setVideo('')
        setText('')
        const response = await fetch('/api/gen', {
          method: "POST",
          body: JSON.stringify({
            query: input
          })
        })
        const { data, type } = await response.json()
        console.log('data:', data)
        if (type === 'image') {
          setImage(data[0])
        }
        if (type === 'video') {
          setVideo(data[0])
        }
        if (type === 'audio') {
          setAudio(data)
        }
        if (type == 'text') {
          setText(data)
        }
      } catch (err) {

        console.log('error;', err)

      } finally{

        setLoading(false);

      }
    }

    const link = `/chat/${chatId}`;
  
    return (
      <main className="flex flex-col items-leading justify-between max-w-lg mx-auto px-5">
       
        <Link href={link} prefetch={false}> {/** bring in chatId */}
          <div className='flex flex-row gap-x-3 mt-3'>
         <ArrowLeft/>
         Back to Chat
         </div>
        </Link>
        
        
        <p className='text-gray-500 dark:text-gray-300 font-black text-6xl my-10'>Imagine anything! 
        </p>
        <Card className='bg-gray-300 dark:bg-gray-800 p-3 shadow-md my-5'>
          <p className='text-sm text-gray-800 dark:text-gray-100 font-light mb-5'>
          Start with something simple as <span className='italic text-gray-600 dark:text-gray-300 mt-1 font-light text-sm '>&apos;create me an image of a owl,&apos;</span>
          </p>
          
          <p className='mt-1 text-gray-800 dark:text-gray-100 font-light text-sm'>
          or something tuned to your liking:
          </p> 
          <p className='italic text-gray-600 dark:text-gray-300 text-sm'>&apos;create me a song with Edo25 major g melodies that sound triumphant, leading up to a crescendo that resolves into a 9th harmonic.&apos;</p>
          
          <p className='my-3 text-sm font-light text-gray-800 dark:text-gray-100'>
          To see more prompts like these, <span className='text-indigo-600 underline-offset-1'><Link href="/chat" prefetch={false}>Click here</Link></span> </p>
        </Card>

        <Input
          className="text-gray-500 px-3 py-1 rounded"
          onChange={e => setInput(e.target.value)}
          placeholder='Type your prompt here...'
        />
        
        <Button
          onClick={callApi}
          className="rounded-full bg-green-500 text-white py-3 px-14 mt-3 mb-4 cursor-pointer"
        >
          {loading ? <LoadingSpinner/> :
          "Generate"
        }
        </Button>
        {
          image && <Image src={image} width={500} alt={" "} height={500}/>
        }
        {
          video && <video src={video} controls></video>
        }
        {
          text && <p>{text}</p>
        }
        {
          audio && (
            <audio controls>
              <source src={audio} type="audio/wav"></source>
            </audio>
          )
        }
        <CopyToChat isOpen={openInviteLink}
                setIsOpen={setOpenInviteLink}
                chatId={chatId}
            />
      </main>
    )
}

export default GeneratePage