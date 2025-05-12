import React from "react";
import { motion } from "motion/react";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutWorks from "@/components/about/AboutWorks";
import AboutChoose from "@/components/about/AboutChoose";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-0"
    >
      <AboutHero />
      <AboutStory />
      <AboutWorks />
      <AboutChoose />
    </motion.div>
  );
};

export default About;
