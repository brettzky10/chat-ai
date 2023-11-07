import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Badge } from "../ui/badge"

const LandingFaq = () => {
  return (
    <div className="m-5">
        <div className="text-center">
            <Badge variant="secondary" color="white">
                FAQ
            </Badge>
            <h2 className="text-3xl text-white font-extrabold max-w-3xl py-5 lg:text-5xl mx-auto">Have a question? We have answers!</h2>
        </div>
    
    <div className="container mx-auto lg:w-[600px] text-gray-400 bg-[#192339] rounded-lg p-5 shadow-xl">
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>
                How does the AI use my photos?
            </AccordionTrigger>
            <AccordionContent>
                The AI trains a model based on your features, then uses this model to curate every photo to look like you after.
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>
                Why is the model training not free?
            </AccordionTrigger>
            <AccordionContent>
                It takes a ridiculous amount of computing power to train the model and those costs add up.
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>
                How long does it typically take?
            </AccordionTrigger>
            <AccordionContent>
                The training takes 1-2 hours.
            </AccordionContent>
        </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
            <AccordionTrigger>
                Do you offer refund?
            </AccordionTrigger>
            <AccordionContent>
                At this time we do not offer a refund.
            </AccordionContent>
        </AccordionItem>
        </Accordion>
    </div>
    </div>
  )
}

export default LandingFaq