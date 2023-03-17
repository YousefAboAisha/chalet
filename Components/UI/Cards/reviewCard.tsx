import CustomImage from "Components/UI/Cards/customImage";
import { StarsRating } from "Components/UI/Utils/starsRating";
import React from "react";

const ReviewCard = () => {
  return (
    <div className="relative w-full flex flex-col gap-1 p-4 bg-background_light dark:bg-background_dark border border-light dark:border-dark rounded-[30px] rounded-tl-sm ">
      <div className="flex items-center gap-6">
        <h2>Yousef Aisha</h2>
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
