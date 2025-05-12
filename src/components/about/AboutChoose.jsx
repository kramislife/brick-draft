import React from "react";
import { motion } from "motion/react";
import {
  DollarSign,
  ShieldCheck,
  LineChart,
  Truck,
  Headphones,
  Users,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutChoose = () => {
  const features = [
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Affordability",
      description:
        "Own sets worth hundreds of dollars for just a few dollars — making the joy of building accessible to everyone.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Authenticity",
      description:
        "All sets are 100% genuine, sourced directly from official LEGO stores and authorized retailers. No knockoffs, ever.",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Transparency",
      description:
        "We publicly share the number of tickets sold and announce all winners openly. Trust and honesty are at the core of everything we do.",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Fast & Secure Shipping",
      description:
        "Winners enjoy fast, insured shipping with real-time tracking. We ensure every prize reaches you safely and securely.",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Dedicated Customer Support",
      description:
        "Questions? Concerns? Our friendly support team is ready to help — we are builders serving builders!",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community First",
      description:
        "More than just prizes — Brick Draft is about connecting fans who love creativity, building, and sharing their LEGO passion.",
    },
  ];

  return (
    <section className="py-10 px-5 bg-secondary/50">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-5 md:mb-10"
      >
        <Badge variant="accent" className="text-sm font-medium mb-5 py-2 px-5">
          WHY CHOOSE BRICK DRAFT
        </Badge>
        <h2 className="text-3xl font-bold mb-4">
          Building Dreams, One Ticket at a Time 🏆
        </h2>
        <p className="max-w-4xl mx-auto italic leading-relaxed">
          We envision a world where every LEGO enthusiast — young or old — has
          the opportunity to own their dream sets without financial barriers.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group hover:border-accent cursor-pointer h-full">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300"
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AboutChoose;
