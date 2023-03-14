import Button from "Components/UI/Button";
import Thumnail from "Components/UI/thumnail";
import Heading from "Components/UI/Heading";
import React from "react";
import { ChaletsData } from "Data/chaletsData";

const ChaletCards = () => {
  return (
    <div className="section">
      <div className="flex items-center justify-between">
        <Heading
          title="Chalet Recommendations"
          details="The best travel recommendations from around the world for you!"
          detailsStyles="w-full lg:w-full mx-0 text-start"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ChaletsData.map((elem, index) => {
          return (
            <Thumnail
              id={index}
              key={index}
              src={elem.src}
              title={elem.title}
              rate={elem.rate}
              info={elem.info}
              price={elem.price}
            />
          );
        })}
      </div>

      <div className="mt-8 w-3/12 whitespace-nowrap min-w-fit mx-auto ">
        <Button title={"Explore More"} />
      </div>
    </div>
  );
};

export default ChaletCards;
