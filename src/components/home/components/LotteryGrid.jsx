import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import LotteryCard from "@/components/home/components/LotteryCard";
import LotterySort from "@/components/home/components/LotterySort";
import { lotteryData, PARTS } from "@/constant/data";

export const SORT_OPTIONS = {
  FEATURED: "Featured",
  ENDING_SOON: "Ending Soon",
  DRAW_DATE: "Draw Date",
  NEWLY_ADDED: "Newly Added",
  PRICE_LOW_HIGH: "Price: Low to High",
  PRICE_HIGH_LOW: "Price: High to Low",
};

const LotteryGrid = ({ title, showViewAll = false, limit }) => {
  const [sortBy, setSortBy] = useState(SORT_OPTIONS.FEATURED);

  // First, get the initial featured-sorted data
  const initialSortedData = [...lotteryData].sort(
    (a, b) => b.features.includes("Featured") - a.features.includes("Featured")
  );

  // If there's a limit, get the top N items first
  const limitedData = limit
    ? initialSortedData.slice(0, limit)
    : initialSortedData;

  // Then apply the selected sorting to the limited or full dataset
  const sortedData = [...limitedData].sort((a, b) => {
    switch (sortBy) {
      case SORT_OPTIONS.ENDING_SOON:
        return new Date(a.drawDate) - new Date(b.drawDate);
      case SORT_OPTIONS.DRAW_DATE:
        return new Date(a.drawDate) - new Date(b.drawDate);
      case SORT_OPTIONS.NEWLY_ADDED:
        return new Date(b.dateAdded) - new Date(a.dateAdded);
      case SORT_OPTIONS.PRICE_LOW_HIGH:
        return a.price - b.price;
      case SORT_OPTIONS.PRICE_HIGH_LOW:
        return b.price - a.price;
      case SORT_OPTIONS.FEATURED:
      default:
        return (
          b.features.includes("Featured") - a.features.includes("Featured")
        );
    }
  });

  const hasMoreSets = limit && lotteryData.length > limit;

  return (
    <section className="py-10 px-5">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
        <div className="flex items-center">
          <LotterySort sortBy={sortBy} onSortChange={setSortBy} />
          {showViewAll && hasMoreSets && (
            <Button
              asChild
              variant="link"
              className="gap-1 inline-flex items-center [&_svg:not([class*='size-'])]:size-4 hover:text-accent hover:no-underline"
            >
              <Link to="/lottery/all">
                View All
                <ArrowRight />
              </Link>
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {sortedData.map((set) => (
          <LotteryCard key={set.id} set={set} PARTS={PARTS} />
        ))}
      </div>
    </section>
  );
};

export default LotteryGrid;
