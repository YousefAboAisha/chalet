import React from "react";
import { BsStarFill } from "react-icons/bs";
import Button from "./Button";
import CustomImage from "./CustomImage";

type ThumnailType = {
  src: string;
  title: string;
  rate: number;
  info: string;
  price: number;
};

const Thumnail = ({ src, title, rate, info, price }: ThumnailType) => {
  return (
    <div className="relative group w-full border border-light dark:border-dark rounded-2xl pb-4 shadow-md">
      <div className="relative w-full h-[250px] max-h-[250px] overflow-hidden rounded-t-2xl">
        <CustomImage
          src={src}
          width={1000}
          height={1000}
          alt="Image"
          className="group-hover:scale-110 duration-500"
        />
      </div>

      <div className="px-4 mt-4 text-text_light bg-background_light dark:text-text_dark dark:bg-background_dark">
        <div className="flex flex-row items-center justify-between mb-2 font-bold">
          <h2>{title}</h2>
          <div className="flex gap-2 items-center">
            <BsStarFill className="text-[#FFC312]" />
            <span>{rate}</span>
          </div>
        </div>

        <p className="opacity-80 text-sm">{info}</p>

        <div className="flex flex-row items-center justify-between mt-2 font-bold">
          <span>$ {price}.00</span>
          <div className="w-fit">
            <Button title="Book now" style="text-[12px] p-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumnail;
