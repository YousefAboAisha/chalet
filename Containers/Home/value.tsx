import Heading from "Components/UI/Heading";
import ValueCard from "Components/UI/valueCard";
import { ValueData } from "Data/valueData";
import React from "react";

const Value = () => {
  return (
    <div className="section w-full">
      <Heading
        title="Top value from us to you"
        additionalStyles="text-center"
        details="Try a varity of benifts when using our services"
      />

      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {ValueData.map((elem, index) => {
          return (
            <ValueCard
              key={index}
              Icon={elem.icon}
              title={elem.title}
              details={elem.details}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Value;
