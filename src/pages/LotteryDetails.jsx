import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LotteryImageSection from "@/components/lottery-details/LotteryImageSection";
import LotteryWhyCollect from "@/components/lottery-details/LotteryWhyCollect";
import LotteryStatsCards from "@/components/lottery-details/LotteryStatsCards";
import LotteryPurchaseSection from "@/components/lottery-details/LotteryPurchaseSection";
import { paymentMethod } from "@/constant/paymentMethod";
import { lotteryData } from "@/constant/data";

const LotteryDetails = () => {
  const { id } = useParams();
  const set = lotteryData.find((item) => item.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!set) return <div>Set not found</div>;

  return (
    <div className="p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Image Section */}
        <div className="lg:sticky lg:top-23 lg:h-fit self-start">
          <LotteryImageSection set={set} />
        </div>

        {/* Details Section */}
        <div className="space-y-5 font-[Inter]">
          <div className="space-y-2">
            <h1 className="hidden lg:block text-4xl font-bold">{set.name}</h1>
            <p className="text-muted-foreground leading-relaxed">
              {set.description}
            </p>
          </div>

          <LotteryWhyCollect set={set} />
          <LotteryStatsCards set={set} />
          <LotteryPurchaseSection
            set={set}
            quantity={quantity}
            setQuantity={setQuantity}
            paymentMethod={paymentMethod}
          />
        </div>
      </div>
    </div>
  );
};

export default LotteryDetails;
