import {CheckIcon} from 'lucide-react'
import Link from 'next/link'
import CheckoutButton from './checkout-button'
import { Button } from './ui/button'


const tiers = [
    {
        name: "Starter",
        id: null,
        href: "#",
        priceMonthly: null,
        description: "Get chatting right away with anyone, anywhere!",
        features: [
            "20 Message Chat Limit in Chats",
            "2 Participant limit in Chat",
            "3 Chat Rooms limit",
            "Supports 2 languages",
            "48-hour support response time",
        ],

    },
    {
        name: "Pro",
        id: "pro",
        href: "#",
        priceMonthly: "$6.99", //Change to pull dynamically
        description: "Unlock the full potential with Pro!",
        features: [
            "Unlimited Messages in Chats",
            "Unlimited Participants in Chats",
            "Unlimited Chat Rooms",
            "Supports up to 10 languages",
            "Multimedia support in chats (coming soon)",
            "1-hour, dedicated support response time",
            "Early access to New Features",
        ],
    },
]


const PricingCards = ({redirect}:{redirect: boolean }) => {
  return (
    <div className=''>
        <div className='mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2'>
            {tiers.map((tier) => (
            <div className='rounded-3xl bg-zinc-800 p-1 shadow-xl'>
                <div
                    key={tier.id}
                    className='flex flex-col justify-between rounded-3xl bg-gradient-to-tr from-black/40 via-white/10 to-black/25 p-8 shadow-xl ring-1 ring-gray-300/10 sm:p-10'
                >
                    <div>
                        <h3 key={tier.id + tier.name} className='text-base font-semibold leading-7 text-[#EFF0D1]'>
                            {tier.name}
                        </h3>
                        <div className='mt-4 flex items-baseline gap-x-2'>
                            {tier.priceMonthly ? (
                                <>
                                    <span className='text-5xl font-bold tracking-tight text-gray-300 dark:text-gray-300'>
                                        {tier.priceMonthly}
                                    </span>
                                    <span className='text-base font-semibold leading-7 text-gray-200 dark:text-gray-200'>
                                        /month
                                    </span>
                                </>
                            ): (
                                <span className='text-5xl font-bold tracking-tight text-gray-300 dark:text-gray-300'>
                                    Free
                                </span>
                            )}
                        </div>
                        <p className='mt-6 text-base leading-7 text-gray-200 dark:text-gray-200'>
                            {tier.description}
                        </p>
                        <ul>
                            {tier.features.map((feature) => (
                                <li key={feature} className='flex gap-x-3 text-gray-200 dark:text-gray-200'>
                                    <CheckIcon
                                        className='h-6 w-5 flex-none text-[#77BA99] dark:text-[#77BA99]'
                                        aria-hidden="true"
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {redirect ? (
                        <Button className='bg-[#EFF0D1] mt-5' variant={"premium"}>
                            <Link href="/register" className='text-white'>
                                Get Started
                            </Link>
                        </Button>
                        
                    ):(
                        tier.id && <CheckoutButton/>
                    )}
                </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PricingCards