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

      <div className="relative w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {PopularData.map((elem, index) => {
          return (
            <div className="relative group" key={index}>
              <CustomImage
                src={elem.src}
                width={400}
                height={400}
                alt="faw"
                title={elem.title}
              />
              <div className="absolute group-hover:opacity-100 opacity-0 duration-500 bottom-0 left-0 min-h-1/4 w-full text-text_dark bg-[#0000002a] backdrop-blur-sm p-2">
                <h2 className="flex items-center gap-2">
                  <FiMapPin />
                  {elem.title}
                </h2>
                <p className="opacity-90 text-sm font-normal">{elem.info}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 w-3/12 whitespace-nowrap min-w-fit mx-auto ">
        <Button title={"Explore More"} />
      </div>
    </div>
  );
};

export default Popular;
