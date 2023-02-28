import Heading from "Components/UI/Heading";
import Input from "Components/UI/Input";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Landing = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full h-[90vh] flex justify-center items-center bg-landing-image bg-cover bg-center before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#00000052]">
      <div className="container">
        <Heading
          title="Explore the world around you"
          details="take a break form the stress of your everyday life, plan trips and explore your favorite destinations"
          additionalStyles="text-center"
        />

        <Input
          type={"search"}
          placeholder={"Search for Chalets to reserve!"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          icon={<BsSearch size={24} />}
        />
      </div>
    </div>
  );
};

export default Landing;
