import Button from "Components/UI/Button";
import CustomImage from "Components/UI/CustomImage";
import Heading from "Components/UI/Heading";
import { PopularData } from "Data/popularData";
import React from "react";

const Popular = () => {
  return (
    <div className="section mb-10">
      <Heading
        title={"Popular places"}
        additionalStyles="text-center"
        details="The most popular places pretend to you "
      />

      <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {PopularData.map((elem, index) => {
          return (
            <CustomImage
              key={index}
              src={elem.src}
              width={400}
              height={400}
              alt="faw"
              title={elem.title}
              info={elem.info}
            />
          );
        })}
      </div>

      <div className="mt-8 mx-auto w-3/12">
        <Button title={"Explore More"} />
      </div>
    </div>
  );
};

export default Popular;
