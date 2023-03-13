import Thumnail from "Components/UI/thumnail";
import React from "react";
import { ChaletsData } from "Data/chaletsData";
import Button from "Components/UI/Button";

const ChaletCards = () => {
  return (
    <div className="mt-8">
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ChaletsData.map((elem, index) => {
          return (
            <Thumnail
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
        <Button title={"Load More"} />
      </div>
    </div>
  );
};

export default ChaletCards;
