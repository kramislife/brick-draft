import React from "react";
import { motion } from "motion/react";
import ContactSocials from "./ContactSocials";
import ContactFaq from "./ContactFaq";

const ContactSidebar = () => {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-5">
        <ContactSocials />
        <ContactFaq />
      </div>
    </motion.div>
  );
};

export default ContactSidebar;
