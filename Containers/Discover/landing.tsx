import Heading from "Components/UI/Heading";
import Input from "Components/UI/Input";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Landing = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full h-[90vh] mt-[70px] flex justify-center items-center bg-landing-image2 bg-cover bg-center before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#00000052] image-clip ">
      <div className="container">
        <Heading
          title="Discover new places"
          details="take a break form the stress of your everyday life, plan trips and explore your favorite destinations"
          additionalStyles="text-center !text-[#FFF]"
        />
      </div>
    </div>
  );
};

export default Landing;
