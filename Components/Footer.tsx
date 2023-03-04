import Link from "next/link";
import React from "react";
import { FooterData } from "../Data/FooterData";
import { Social } from "../Data/Social";
import CustomImage from "./UI/CustomImage";
import FooterCard from "./UI/FooterCard";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="relative container grid grid-cols-1 lg:grid-cols-2 mt-24 mb-12 p-6 gap-4 bg-transparent text-text_dark rounded-lg shadow-lg border border-border_dark">
      <div className="flex flex-col gap-6">
        {FooterData.map((elem, index) => {
          return (
            <FooterCard
              key={index}
              label={elem.label}
              value={elem.value}
              Icon={elem.icon}
            />
          );
        })}
      </div>

      <div className="flex flex-col gap-6 items-center justify-center">
        <div className="max-w-[80px] max-h-[80px] flex flex-col gap-2 justify-center items-center">
          <CustomImage
            src="/favicon.png"
            width={1000}
            height={1000}
            alt="Logo"
            className="max-h-[70px] max-w-[70px]"
          />
          <h2 className="font-bold text-">Chalet</h2>
        </div>

        <div className="flex flex-row gap-4 ">
          {Social.map((elem, index) => {
            return (
              <Link
                key={index}
                href={elem.href}
                target={"_blank"}
                rel={"noreferrer"}
                className="bg-transparent p-3 rounded-md border border-border_dark duration-500 hover:border-transparent"
              >
                {<elem.icon size={19} />}
              </Link>
            );
          })}
        </div>
        <h2 className="text-[15px] mt-2 font-secondary">
          All Rights Reserved To Yousef R Abo Aisha © {date}
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
