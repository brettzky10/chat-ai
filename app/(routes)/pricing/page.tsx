import PricingCards from '@/components/pricing-cards'
import Link from 'next/link'
import React from 'react'

const PricingPage = () => {
  return (
    <div className='isolate overflow-hidden bg-gray-900'>
      <div className='mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8'>
        <div className='mx-auto max-w-4xl'>
          <h2 className='text-base font-semibold leading-7 text-[#EFF0D1]'>
            Pricing
          </h2>
          <p className='mt-2 text-4xl font-bold tracking-light text-white sm:text-5xl'>
            Translate {" "}
            <br/>
            for any Business
          </p>
        </div>
        <div className='relative mt-6'>
          <p className='mx-auto max-w-2xl text-lg leading-8 text-white/60'>
            , we are sure the <Link href="/contact">
            reach out to us
                </Link> {" "}   <span className='underline'>
                
            </span>
          </p>
          <svg
            viewBox='0 0 1208 1024'
            className='absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0'
          >
            <ellipse
              cx={604}
              cy={512}
              fill="url(#radial-gradient-pricing)"
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id="radial-gradient-pricing">
                <stop stopColor='#EFF0D1'/>
                <stop offset={1} stopColor='#77BA99'/>
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className='flow-root bg-gray-900 pb-24 sm:pb-32'>
          <div className='-mt-80'>
            <PricingCards redirect={true}/>
          </div>
      </div>
    </div>
  )
}

export default PricingPage