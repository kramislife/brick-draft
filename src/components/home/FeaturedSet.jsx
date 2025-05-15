import React from "react";
import FeaturedGrid from "@/components/home/components/FeaturedGrid";

const FeaturedSet = () => {
  return (
    <FeaturedGrid
      title="Featured Sets"
      showViewAll={true}
      limit={8}
    />
  );
};

export default FeaturedSet;