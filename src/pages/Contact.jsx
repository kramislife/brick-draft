import React from "react";
import { motion } from "motion/react";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactSidebar from "@/components/contact/ContactSidebar";
import {
  fadeIn,
  heroCircleAnimations,
  slideUp,
  slideLeft,
  slideRight,
} from "@/hooks/animationConfig"; // animation config
import {
  contactHeroData,
  faqData,
  formFieldsData,
  socialsData,
} from "@/constant/contactData"; // constant data

const Contact = () => {
  const heroAnimations = {
    pageAnimation: fadeIn,
    titleAnimation: slideUp,
    descriptionAnimation: {
      ...slideUp,
      transition: { duration: 0.8, delay: 0.2 },
    },
    circleAnimations: heroCircleAnimations,
  };

  const formAnimations = slideLeft;
  const sidebarAnimations = slideRight;

  return (
    <motion.div {...fadeIn}>
      <ContactHero data={contactHeroData} animations={heroAnimations} />
      <div className="bg-secondary/50 grid grid-cols-1 lg:grid-cols-3 px-5 py-10 gap-5">
        <ContactFormSection data={formFieldsData} animations={formAnimations} />
        <ContactSidebar
          faqData={faqData}
          socialsData={socialsData}
          animations={sidebarAnimations}
        />
      </div>
    </motion.div>
  );
};

export default Contact;
