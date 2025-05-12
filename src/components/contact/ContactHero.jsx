import React from "react";
import { motion } from "motion/react";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-36">
      <div className="absolute inset-0 opacity-15">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -top-24 -left-24 w-80 h-80 md:w-96 md:h-96 rounded-full bg-accent"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-1/2 right-1/4 w-52 h-52 md:w-64 md:h-64 rounded-full bg-accent"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute -bottom-32 -right-32 w-64 h-64 md:w-80 md:h-80 rounded-full bg-accent"
        />
      </div>
      <div className="relative px-5 text-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl lg:leading-tight font-bold mb-5 leading-tight"
        >
          Contact <span className="text-accent">Us</span> <br />
        </motion.h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto max-w-xl"
        >
          <p className="mx-auto text-sm md:text-base italic">
            We're here to help with any questions about LEGO set drawings,
            ticket purchases, or your account!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
