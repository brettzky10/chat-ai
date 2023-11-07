"use client"
import { Button } from '../ui/button'
import { redirect, useRouter } from "next/navigation";
import { Brush } from 'lucide-react';

export default function GenerateButton() {
    const router = useRouter();
  return (
    <div className='flex flex-row justify-end space-x-2 m-5 mb-0'>
      <div className='w-[100rem]'>
        <Button variant="premium" onClick={()=> router.push("/gen")} className='px-5'>
            <Brush className='h-4 w-4 mr-2'/>
            Generate
          </Button>
      </div>
    </div>
    
  )
}
