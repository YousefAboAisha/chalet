import Heading from "Components/UI/Heading";
import Input from "Components/UI/Input";
import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Landing = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full h-[90vh] mt-[70px] flex justify-center items-center bg-landing-image bg-cover bg-center before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#00000052]">
      <div className="container bg-[#ffffff36] rounded-2xl p-4">
        <Heading
          title="Explore the world around you"
          details="take a break form the stress of your everyday life, plan trips and explore your favorite destinations"
          additionalStyles="text-center !text-[#FFF]"
        />

        <div className="w-full md:w-10/12 lg:w-9/12 mx-auto mt-8">
          <Input
            type={"search"}
            placeholder={"Search for Chalets to reserve!"}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            icon={<BsSearch size={20} />}
            style=""
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
