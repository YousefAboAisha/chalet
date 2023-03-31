import Button from "Components/UI/Inputs/Button";
import React from "react";
import { ChaletsData } from "Data/chaletsData";
import Heading from "Components/UI/Typography/Heading";
import Thumnail from "Components/UI/Cards/Thumbnail";
import Link from "next/link";

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

      <div className="grid-cards mt-8">
        {ChaletsData.slice(0, 6).map((elem, index) => {
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
      <Link href={"/discover"}>
        <div className="mt-8 w-3/12 whitespace-nowrap min-w-fit mx-auto">
          <Button title={"Explore More"} />
        </div>
      </Link>
    </div>
  );
};

export default ChaletCards;
