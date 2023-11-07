import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AspectRatio } from './ui/aspect-ratio'


export const Logo = () => {
  return (
    <Link href="/" prefetch={false} className='overflow-hidden'>
    <div className='flex flex-row gap-x-2 font-black text-lg'>
        
        <Image
            src="/letter-b.png"
            alt="logo"
            className='dark:filter dark:invert'
            priority
            width={32}
            height={6}

        />
        Buddy Chat
        
    </div>
    </Link>
  )
}
