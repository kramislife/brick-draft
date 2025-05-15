import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SORT_OPTIONS } from "@/components/home/components/FeaturedGrid";

const FeaturedSort = ({ sortBy, onSortChange }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">Sort by:</span>
      <Select value={sortBy} onValueChange={onSortChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(SORT_OPTIONS).map(([key, value]) => (
          <SelectItem key={key} value={value}>
            {value}
          </SelectItem>
        ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FeaturedSort;

