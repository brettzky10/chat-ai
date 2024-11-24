import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

const ContactSection = () => {
  return (
    <div className='relative'>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 items-center flex flex-row md:flex-col max-w-7xl mx-auto text-center'>
        <h4 className='text-xl md:text-3xl mx-3 my-5 sm:flex hidden'>
            Ready to free yourself from language barriers?
        </h4>
        <Button className='bg-[#EFF0D1]'>
            Start for Free
        </Button>
        </div>
        
        <div className='bg-zinc-950'>
        <img
        src="/images/store-man.webp"
        alt="store man"
        className='w-screen aspect-auto opacity-25'
        width={0}
        height={0}
        />
        </div>
        
    </div>
  )
}

export default ContactSection