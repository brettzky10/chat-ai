import LoadingSpinner from '@/components/loading-spinnner'
import React from 'react'

function Loading() {
  return (
    <div className='flex items-center p-10 justify-center'>
        <LoadingSpinner/>
    </div>
  )
}

export default Loading