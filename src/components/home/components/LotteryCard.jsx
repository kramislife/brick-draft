import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Puzzle, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import LotteryDialogParts from "@/pages/LotteryDialogParts";

const LotteryCard = ({ set, PARTS }) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow dark:border-none rounded-xl overflow-hidden p-0 gap-2">
      <div className="relative aspect-square border-b">
        <img
          src={set.image}
          alt={set.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="brand">{set.theme}</Badge>
        </div>
        {set.features.includes("Featured") && (
          <div className="absolute top-4 right-4">
            <Badge variant="accent">Featured</Badge>
          </div>
        )}
      </div>

      <CardContent className="p-3 space-y-2">
        <h3 className="text-xl font-semibold">{set.name}</h3>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <Puzzle className="w-4 h-4" />
            <span>{set.pieces} pieces</span>
          </div>
          <span className="text-emerald-500 font-bold text-lg">
            ${set.price.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Clock className="w-4 h-4" />
          <span>
            {set.drawDate} at {set.drawTime}
          </span>
        </div>

        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Users className="w-4 h-4" />
          <span>
            {set.slotsAvailable} of {set.totalSlots} slots left
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-2 grid grid-cols-2 gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="brand">View Parts</Button>
          </DialogTrigger>
          <LotteryDialogParts
            parts={set.parts}
            setName={set.name}
            PARTS={PARTS}
          />
        </Dialog>
        <Button variant="accent">
          <Link to={`/lottery/${set.id}`}>Buy Ticket</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LotteryCard;
