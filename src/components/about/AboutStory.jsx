import React from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

const AboutStory = () => {
  return (
    <section className="flex flex-col md:flex-row gap-5 py-10 px-5 bg-secondary/50">
      <motion.div
        className="md:w-1/2"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://res.cloudinary.com/mark-legostore/image/upload/v1743056478/world_of_minifigs/icons/Father-son.png"
          alt="Brick Draft Community"
          className="rounded-lg shadow-xl"
        />
      </motion.div>

      <motion.div
        className="md:w-1/2"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Badge
          variant="accent"
          className="text-sm font-medium mb-5 py-2 px-5"
        >
          OUR STORY
        </Badge>
        <h2 className="text-3xl font-bold mb-5">
          Making LEGO Dreams Accessible to Everyone
        </h2>
        <div className="space-y-5 leading-relaxed">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-bold">Brick Draft</span> was born from a
            simple yet powerful idea: making LEGO collecting accessible to
            everyone. We understand that many LEGO enthusiasts dream of owning
            premium sets but are held back by their high costs.
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Our innovative lottery system creates an exciting opportunity for
            builders of all backgrounds to win authentic LEGO sets at a fraction
            of their retail price. Every draw is conducted with complete
            transparency using certified random number generation technology.
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Beyond just being a lottery platform, we've built a thriving
            community of LEGO enthusiasts who share our passion for building and
            collecting. Our{" "}
            <span className="font-bold">97% satisfaction rate</span> reflects
            our commitment to fairness, authenticity, and exceptional service.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutStory;
