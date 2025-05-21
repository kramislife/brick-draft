import React from "react";
import { motion } from "motion/react";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import AboutWorks from "@/components/about/AboutWorks";
import AboutChoose from "@/components/about/AboutChoose";
import {
  heroData,
  storyData,
  worksData,
  chooseData,
} from "@/constant/aboutData";
import {
  fadeIn,
  heroCircleAnimations,
  slideUp,
  slideLeft,
  slideRight,
  sectionHeaderAnimation,
  cardGridAnimation,
  featureAnimation,
  hoverScale,
  hoverRotate,
  staggered,
} from "@/hooks/animationConfig";

const About = () => {
  const heroAnimations = {
    pageAnimation: fadeIn,
    titleAnimation: slideUp,
    descriptionAnimation: {
      ...slideUp,
      transition: { duration: 0.8, delay: 0.2 },
    },
    circleAnimations: heroCircleAnimations,
  };

  const storyAnimations = {
    imageAnimation: slideLeft,
    contentAnimation: slideRight,
    paragraphAnimation: (index) => staggered(slideUp, index, 0.2),
  };

  const worksAnimations = {
    headerAnimation: sectionHeaderAnimation,
    stepAnimation: (index) => cardGridAnimation(index, 3),
    tipsHeaderAnimation: sectionHeaderAnimation,
    tipAnimation: (index) => cardGridAnimation(index, 4),
    numberAnimation: hoverScale,
  };

  const chooseAnimations = {
    headerAnimation: sectionHeaderAnimation,
    featureAnimation: featureAnimation,
    iconAnimation: hoverRotate,
  };

  return (
    <motion.div {...fadeIn}>
      <AboutHero data={heroData} animations={heroAnimations} />
      <AboutStory data={storyData} animations={storyAnimations} />
      <AboutWorks data={worksData} animations={worksAnimations} />
      <AboutChoose data={chooseData} animations={chooseAnimations} />
    </motion.div>
  );
};

export default About;
