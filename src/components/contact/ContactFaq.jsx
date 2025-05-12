import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactFaq = () => {
  const faqItems = [
    {
      question: "Where are you located?",
      answer:
        "We are based in [Your Location]. However, we operate primarily online to serve LEGO enthusiasts worldwide.",
    },
    {
      question: "Do you have a physical store?",
      answer:
        "No, we are an online-only platform specializing in LEGO set lottery draws.",
    },
    {
      question: "Are your LEGO parts authentic?",
      answer:
        "Yes, all our LEGO sets are 100% authentic, sourced directly from official LEGO stores and authorized retailers.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping times vary by location. Winners typically receive their prizes within 5-7 business days.",
    },
    {
      question:
        "Can I request specific LEGO parts that are not listed on your website?",
      answer:
        "Currently, we focus on complete LEGO sets for our lottery draws. Special requests are not available at this time.",
    },
  ];

  return (
    <Card>
      <CardHeader className="text-xl font-semibold">
        Frequently Asked Questions
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default ContactFaq;