import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";

const ContactFaq = () => {
  const faqItems = [
    {
      question: "Where are you located?",
      answer: "We’re located in Lehi, Utah, 84043",
    },
    {
      question: "Do you have a physical store?",
      answer:
        "We currently don’t have a physical store yet. All transactions were fulfilled online.",
    },
    {
      question: "Where did you source your LEGO® products?",
      answer: "We only source from official and authorized LEGO® stores.",
    },
    {
      question: "Are your LEGO® new and authentic?",
      answer:
        "Our products are guaranteed to be 100% LEGO®. You can check the reviews in our online shops for legitimacy.",
    },
    {
      question: "Is Brick Draft officially affiliated with LEGO?",
      answer:
        "No, Brick Draft is an independent platform. We are not endorsed or sponsored by The LEGO Group.",
    },
    {
      question: "How long does shipping take for the items I selected?",
      answer:
        "Shipping occurs within 1-3 business days after the draw concludes. Delivery times vary by location, typically ranging from 3-7 days within the U.S.",
    },
  ];

  return (
    <Card className="gap-3">
      <CardHeader className="text-xl font-semibold">
        Frequently Asked Questions
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-start gap-2">
                  <Check size={17} className="text-green-500 shrink-0" />

                  <span>{item.answer}</span>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default ContactFaq;
