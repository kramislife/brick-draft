import React from "react";
import AnnouncementBar from "@/components/home/AnnouncementBar";
import Banner from "@/components/home/Banner";
import FeaturedSet from "@/components/home/LotterySet";

const Home = () => {
  return (
    <>
      <AnnouncementBar />
      <Banner />
      <FeaturedSet />
    </>
  );
};

export default Home;
