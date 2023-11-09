"use client"
import { Button } from '../ui/button'
import { useRouter } from "next/navigation";
import { Box } from 'lucide-react';

export default function SolveButton() {
    const router = useRouter();
  return (
    <div className='flex flex-row justify-end space-x-2 m-5 mb-0'>
      <div className='w-[100rem]'>
        <Button variant="premium" onClick={()=> router.push("/solve")} className='px-5'>
            <Box className='h-4 w-4 mr-2'/>
            Solve
          </Button>
      </div>
    </div>
    
  )
}