import Button from "Components/UI/Button";
import Heading from "Components/UI/Heading";
import React from "react";

const ChaletCards = () => {
  return (
    <div className="section">
      <div className="flex items-center justify-between">
        <Heading
          title="Chalet Recommendations"
          details="The best travel recommendations from around the world for you!"
          detailsStyles="w-full lg:w-full mx-0 text-start"
        />

        <div className="w-fit">
          <Button title="Explore more" style={"text-[11px] p-2"} />
        </div>
      </div>

      <div className="mt-8"></div>
    </div>
  );
};

export default ChaletCards;
