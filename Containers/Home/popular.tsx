import Slider from "Components/UI/Sliders/multiSlider";
import Button from "Components/UI/Inputs/button";
import CustomImage from "Components/UI/Cards/customImage";
import Heading from "Components/UI/Typography/heading";
import { PopularData } from "Data/popularData";
import React from "react";
import { FiMapPin } from "react-icons/fi";

const Popular = () => {
  return (
    <div className="section mb-10">
      <Heading
        title={"Popular places"}
        additionalStyles="text-center"
        details="The most popular places pretend to you "
      />

      <Slider />
    </div>
  );
};

export default Popular;
