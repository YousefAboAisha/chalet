import Slider from "Components/Carousel";
import Button from "Components/UI/Button";
import CustomImage from "Components/UI/CustomImage";
import Heading from "Components/UI/Heading";
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
