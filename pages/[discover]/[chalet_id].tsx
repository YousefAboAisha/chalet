import SingleSlider from "Components/SingleSlider";
import Slider from "Components/Slider";
import HeadingTitle from "Components/UI/HeadingTitle";
import ChaletDetails from "Containers/Discover/ChaletDetails";
import React from "react";

const Chalet = () => {
  return (
    <div className="relative container mt-28">
      <div className="container">
        <HeadingTitle />
        <SingleSlider />
        <ChaletDetails />
      </div>
    </div>
  );
};

export default Chalet;
