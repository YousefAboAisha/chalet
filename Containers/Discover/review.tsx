import Button from "Components/UI/Inputs/Button";
import TextArea from "Components/UI/Inputs/TextArea";
import BreakLine from "Components/UI/Utils/BreakLine";
import React, { useState } from "react";
import ReactStars from "react-stars";
import ReviewCard from "../../Components/UI/Cards/reviewCard";

const Review = () => {
  const starsNum = 5;
  const [textValue, setTextValue] = useState("");
  const [rateValue, setRateValue] = useState(0);

  // console.log(rateValue);

  return (
    <div className="relative flex flex-col gap-2 mt-6">
      <TextArea
        placeholder="Enter your feedback..."
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
        style=""
      />

      <div className="flex gap-2 items-center mt-2">
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

      <div className="w-3/12 lg:w-2/12 text-sm whitespace-nowrap min-w-fit">
        <Button title={"Send"} />
      </div>

      <div className="mt-8 ">
        <div className="flex flex-col max-h-[200px] gap-4 pr-6 py-4 overflow-y-auto">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />

          <h2 className="text-center text-sm mx-auto cursor-pointer underline my-2 text-primary">
            Load More
          </h2>
        </div>
        <BreakLine />
      </div>
    </div>
  );
};

export default Review;
