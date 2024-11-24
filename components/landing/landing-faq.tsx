import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Badge } from "../ui/badge"
import Link from "next/link"

const LandingFaq = () => {
  return (
    <div className="m-5">
        <div className="text-center">
            <Badge variant="secondary" className="text-[#EFF0D1]">
                FAQ
            </Badge>
            <h2 className="text-3xl text-white font-extrabold max-w-3xl py-5 lg:text-5xl mx-auto">Have a question? We have answers!</h2>
        </div>
    
    <div className="container mx-auto lg:w-[600px] text-gray-400 bg-[#192339] rounded-lg p-5 shadow-xl">
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>
                How does your pricing work?
            </AccordionTrigger>
            <AccordionContent>
                The free plan allows limited usage per month. We charge a monthly $6.99 subscription to business owners that want unlimited access to our tools. See our <Link href={"/pricing"} className="underline">pricing page</Link>
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>
                What languages do you offer?
            </AccordionTrigger>
            <AccordionContent>
                The languages we offer is always being updated. To see a full list, visit our <Link href="/languages" className="underline">languages page</Link>.
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>
                Why not use google translate?
            </AccordionTrigger>
            <AccordionContent>
                Our UI allows business owners a simpler way to interact with customers while still providing some of the best translation AI in the industry.
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        {/* <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>
                Do you offer refund?
            </AccordionTrigger>
            <AccordionContent>
                At this time we do not offer a refund.
            </AccordionContent>
        </AccordionItem>
        </Accordion> */}
    </div>
    </div>
  )
}

export default LandingFaq