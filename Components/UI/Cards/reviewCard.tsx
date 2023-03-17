import CustomImage from "Components/UI/Cards/CustomImage";
import { StarsRating } from "Components/UI/Utils/StarsRating";
import React from "react";

const ReviewCard = () => {
  return (
    <div className="relative w-full flex flex-col gap-1 p-4 full-theme rounded-[30px] rounded-tl-sm shadow-sm">
      <div className="flex items-center gap-2">
        <h2 className="font-bold">Yousef Aisha</h2>|
        <StarsRating />
      </div>

      <p className="text-sm opacity-80">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
      </p>
    </div>
  );
};

export default ReviewCard;
