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
    <div>
        <div className='mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2'>
            {tiers.map((tier) => (
                <div
                    key={tier.id}
                    className='flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10'
                >
                    <div>
                        <h3 key={tier.id + tier.name} className='text-base font-semibold leading-7 text-indigo-600'>
                            {tier.name}
                        </h3>
                        <div className='mt-4 flex items-baseline gap-x-2'>
                            {tier.priceMonthly ? (
                                <>
                                    <span className='text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-900'>
                                        {tier.priceMonthly}
                                    </span>
                                    <span className='text-base font-semibold leading-7 text-gray-600 dark:text-gray-600'>
                                        /month
                                    </span>
                                </>
                            ): (
                                <span className='text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-900'>
                                    Free
                                </span>
                            )}
                        </div>
                        <p className='mt-6 text-base leading-7 text-gray-600 dark:text-gray-600'>
                            {tier.description}
                        </p>
                        <ul>
                            {tier.features.map((feature) => (
                                <li key={feature} className='flex gap-x-3 text-gray-600 dark:text-gray-600'>
                                    <CheckIcon
                                        className='h-6 w-5 flex-none text-indigo-600 dark:text-indigo-600'
                                        aria-hidden="true"
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {redirect ? (
                        <Button className='bg-indigo-600 mt-5' variant={"premium"}>
                            <Link href="/register" className='text-white'>
                                Get Started
                            </Link>
                        </Button>
                        
                    ):(
                        tier.id && <CheckoutButton/>
                    )}
                </div>
            ))}
        </div>
    </div>
  )
}

export default PricingCards