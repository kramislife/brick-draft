import React from "react";
import { motion } from "motion/react";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import ContactSidebar from "@/components/contact/ContactSidebar";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <ContactHero />
      <div className="bg-secondary/50 grid grid-cols-1 lg:grid-cols-3 px-5 py-10 gap-5">
        <ContactFormSection />
        <ContactSidebar />
      </div>
    </motion.div>
  );
};

export default Contact;
