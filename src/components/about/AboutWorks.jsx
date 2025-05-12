import React from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    title: "Choose Your Numbers",
    description:
      "Visit our lottery page to select your lucky numbers. Pick from our range of available numbers and create your unique combination.",
  },
  {
    title: "Purchase Your Tickets",
    description:
      "Add your selected numbers to cart and proceed to checkout. The more tickets you buy, the higher your chances of winning!",
  },
  {
    title: "Watch the Draw",
    description:
      "Join our live draw events to see if you're a winner! Winners will be notified immediately and prizes will be distributed according to our terms.",
  },
];

const AboutWorks = () => {
  return (
    <section className="py-10 px-5">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-5 md:mb-10"
      >
        <Badge variant="accent" className="text-sm font-medium mb-5 py-2 px-5">
          HOW IT WORKS
        </Badge>
        <h2 className="text-3xl font-bold mb-4">Pick, Play, and Win! 🎲</h2>
        <p className="max-w-4xl mx-auto italic leading-relaxed">
          Join the excitement of Brick Draft's lottery system! Whether you're a
          first-time player or a regular participant, our simple process makes
          it easy to try your luck and potentially win amazing prizes.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="dark:border-none">
              <CardContent className="p-8 text-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-12 h-12 bg-accent dark:text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-6 font-bold"
                >
                  {index + 1}
                </motion.div>
                <CardTitle className="text-xl font-bold mb-4">
                  {step.title}
                </CardTitle>
                <p className="text-sm italic">{step.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutWorks;
