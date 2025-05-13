import React from "react";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const ContactFormSection = () => {
  const formFields = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Enter your name",
      required: true,
      gridSpan: "md:col-span-1",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
      gridSpan: "md:col-span-1",
    },
    {
      id: "subject",
      label: "Subject",
      type: "text",
      placeholder: "What is this regarding?",
      required: false,
      gridSpan: "md:col-span-2",
    },
  ];

  const messageField = {
    id: "message",
    label: "Message",
    placeholder: "Enter your message",
    required: true,
  };

  return (
    <motion.div
      className="lg:col-span-2"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader className="text-xl font-semibold">
          Send us a message
          <p className="text-sm text-muted-foreground font-normal">
            Fill out the form below and we'll get back to you as soon as
            possible
          </p>
        </CardHeader>
        <CardContent>
          <form className="space-y-5">
            {/* Input Fields Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {formFields.map((field) => (
                <div key={field.id} className={`space-y-2 ${field.gridSpan}`}>
                  <Label htmlFor={field.id}>{field.label}</Label>
                  <Input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                </div>
              ))}
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor={messageField.id}>{messageField.label}</Label>
              <Textarea
                id={messageField.id}
                placeholder={messageField.placeholder}
                className="min-h-[200px]"
                required={messageField.required}
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" variant="accent" className="w-full">
              <Send />
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactFormSection;
