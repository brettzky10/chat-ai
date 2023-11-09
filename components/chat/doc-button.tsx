"use client"
import { Button } from '../ui/button'
import { useRouter } from "next/navigation";
import { Box, FileText } from 'lucide-react';

export default function DocButton() {
    const router = useRouter();
  return (
    <div className='flex flex-row justify-end space-x-2 m-5 mb-0'>
      <div className='w-[100rem]'>
        <Button variant="default" onClick={()=> router.push("/doc")} className='px-5'>
            <FileText className='h-4 w-4 mr-2'/>
            Doc
          </Button>
      </div>
    </div>
    
  )
}