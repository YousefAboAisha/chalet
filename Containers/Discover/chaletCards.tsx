import React, { useState } from "react";
import { ChaletsData } from "Data/chaletsData";
import Button from "Components/UI/Inputs/Button";
import Thumnail from "Components/UI/Cards/Thumbnail";

const ChaletCards = () => {
  const [page, setPage] = useState(6);
  const [loading, setLoading] = useState(false);

  const clickHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    setTimeout(() => {
      setPage(page + 6);
    }, 2000);
  };

  return (
    <div className="mt-8">
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ChaletsData.slice(0, page).map((elem, index) => {
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
        <Button title={"Load More"} onClick={clickHandler} loading={loading} />
      </div>
    </div>
  );
};

export default ChaletCards;
