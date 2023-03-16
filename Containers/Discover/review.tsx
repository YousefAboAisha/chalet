import { StarsRating } from "Components/UI/StarsRating";
import TextArea from "Components/UI/TextArea";
import React, { useState } from "react";
import ReactStars from "react-stars";
import ReviewCard from "./reviewCard";

const Review = () => {
  const starsNum = 5;
  const [textValue, setTextValue] = useState("");
  const [rateValue, setRateValue] = useState(0);

  console.log(rateValue);

  return (
    <div className="relative flex flex-col gap-2 mt-6">
      <TextArea
        placeholder="Enter your feedback..."
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        style=""
      />

      <div className="flex gap-2 items-center mt-4">
        <ReactStars
          count={starsNum}
          value={rateValue}
          onChange={(val) => setRateValue(val)}
          size={25}
          color2={"#D61355"}
          color1={"#DDD"}
          half
        />

        <div className="text-[12px] ml-2">
          {rateValue} out of ({starsNum})
        </div>
      </div>

      <div className="flex flex-col max-h-[200px] gap-4 pr-6 py-4 mt-4 overflow-y-auto">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default Review;
