import React from "react";
import FeaturedGrid from "@/components/home/components/LotteryGrid";

const LotterySet = () => {
  return <FeaturedGrid title="Featured Sets" showViewAll={true} limit={8} />;
};

export default LotterySet;
