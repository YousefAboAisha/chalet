import ChaletCards from "Containers/Discover/chaletCards";
import Filters from "Containers/Discover/filters";
import Landing from "Containers/Discover/landing";
import React from "react";

const discover = () => {
  return (
    <div className={"mt-[70px]"}>
      <Landing />
      <div className="container">
        <Filters />
        <ChaletCards />
      </div>
    </div>
  );
};

export default discover;
