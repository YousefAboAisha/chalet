import Input from "Components/UI/Inputs/Input";
import Heading from "Components/UI/Typography/Heading";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Landing = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="relative w-full h-[90vh] mt-[70px] flex justify-center items-center bg-landing-image bg-cover bg-center before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#00000052]">
      {/* bg-[#ffffff36] bg if we wanna add some blur  */}
      <div className="container rounded-2xl p-4">
        <Heading
          title="Explore the world around you"
          details="take a break form the stress of your everyday life, plan trips and explore your favorite destinations"
          additionalStyles="text-center !text-[#FFF]"
        />

        <div className="w-full md:w-10/12 lg:w-9/12 mx-auto mt-8">
          <Input
            type={"search"}
            placeholder={"Search for wedding halls to reserve!"}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            icon={<AiOutlineSearch size={24} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
