import Slider from "Components/UI/Sliders/PromotedSlider";
import Heading from "Components/UI/Typography/Heading";
import React from "react";

const Promoted = () => {
  return (
    <div className="section mb-10">
      <Heading
        title={"Promoted Wedding halls"}
        additionalStyles="text-center"
        details="You can add your Wedding hall & get noticed and seen much often. "
      />

      <Slider />
    </div>
  );
};

export default Promoted;
