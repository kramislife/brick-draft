import React from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, ListChecks, Clock, Bell } from "lucide-react";

const steps = [
  {
    title: "Explore LEGO® Sets",
    description:
      "Each draw features unique LEGO® sets. Preview included pieces and all the key details before joining.",
  },
  {
    title: "Join the Draw",
    description:
      "Buy tickets for the sets you’re interested in. More tickets mean better odds in the picking order.",
  },
  {
    title: "Ticket Queueing",
    description:
      "After ticket sales close, we randomly shuffle the queue based on tickets purchased.",
  },
  {
    title: "Pick Your Bricks",
    description:
      "When your turn comes, choose your favorite LEGO® pieces from what’s available.",
  },
  {
    title: "Understand the Draft",
    description:
      "Round 1: Standard order. Round 2: Reverse order (last goes first). This pattern continues until all bricks are picked!",
  },
  {
    title: "Receive Your LEGO®",
    description:
      "After the draw wraps up, we’ll ship your selected bricks straight to your doorstep.",
  },
];

const tips = [
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Understand the Sets",
    description:
      "Carefully review the parts list of each featured LEGO® set before buying tickets.",
  },
  {
    icon: <ListChecks className="w-5 h-5" />,
    title: "Strategic Ticket Purchase",
    description:
      "Consider buying multiple tickets to increase your chances of getting an earlier queue.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Act Fast When It's Your Turn",
    description:
      "Be ready to make your selections when your queue number is called.",
  },
  {
    icon: <Bell className="w-5 h-5" />,
    title: "Stay Informed",
    description:
      "Keep an eye on your email and our website for updates on draws and your queue status.",
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
        <h2 className="text-3xl font-bold mb-4">
          {" "}
          Get the LEGO® Pieces You Want, Simply!
        </h2>
        <p className="max-w-4xl mx-auto italic leading-relaxed">
          Join our engaging Brick Drafts for a chance to acquire the exact LEGO®
          elements you've been searching for.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
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

      {/* Tips Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <Badge variant="accent" className="text-sm font-medium mb-5 py-2 px-5">
          BRICK DRAFT TIPS
        </Badge>
        <h2 className="text-2xl font-bold mb-4">
          Tips for Brick Draft Success
        </h2>
        <p className="max-w-4xl mx-auto italic leading-relaxed">
          Maximize your chances of getting the exact pieces you want with these
          helpful strategies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {tips.map((tip, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="dark:border-none h-full">
              <CardContent className="p-6 flex flex-col items-center text-center h-full">
                <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-4">
                  {tip.icon}
                </div>
                <CardTitle className="text-lg font-bold mb-2">
                  {tip.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {tip.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutWorks;
