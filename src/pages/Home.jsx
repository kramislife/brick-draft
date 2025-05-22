import React from "react";
import AnnouncementBar from "@/components/home/AnnouncementBar";
import Banner from "@/components/home/Banner";
import FeaturedSet from "@/components/home/LotterySet";
import WhyChoose from "@/components/home/WhyChoose";
import { aboutAnimations } from "@/hooks/animationConfig";
import { whyChooseData } from "@/constant/aboutData";


const Home = () => {
  return (
    <>
      <AnnouncementBar />
      <Banner />
      <FeaturedSet />
      <WhyChoose data={whyChooseData} animations={aboutAnimations.choose} />
    </>
  );
};

export default Home;
