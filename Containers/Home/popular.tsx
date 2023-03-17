import Slider from "Components/UI/Sliders/MultiSlider";
import Heading from "Components/UI/Typography/Heading";
import React from "react";

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
