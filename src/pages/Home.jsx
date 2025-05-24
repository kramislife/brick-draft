import React from "react";
import AnnouncementBar from "@/components/home/AnnouncementBar";
import Banner from "@/components/home/Banner";
import FeaturedSet from "@/components/home/LotterySet";
import WhyChoose from "@/components/home/WhyChoose";
import UpcomingDraw from "@/components/home/UpcomingDraw";
import { aboutAnimations } from "@/hooks/animationConfig";
import { whyChooseData } from "@/constant/aboutData";

const Home = () => {
  return (
    <>
      <AnnouncementBar />
      <Banner />
      <UpcomingDraw />
      <FeaturedSet />
      <WhyChoose data={whyChooseData} animations={aboutAnimations.choose} />
    </>
  );
};

export default Home;
