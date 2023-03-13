import { Routes } from "Data/routes";
import { useScrollDirection } from "Hooks/useScrollDirection";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "./UI/Button";

const Navbar = () => {
  const router = useRouter();
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`fixed w-full h-[70px] top-0 left-0 z-[10000] items-center bg-background_light text-text_light dark:bg-background_dark dark:text-text_dark duration-500 shadow-lg ${
        scrollDirection === "down" ? "" : ""
      } `}
    >
      <div className="container flex flex-row justify-between items-center h-full">
        <Link href={"/"} className="text-2xl">
          Chalet
        </Link>

        <div
          className={`flex items-center justify-center gap-8 md:gap-6 lg:gap-8`}
        >
          {Routes.map((elem, index) => {
            return (
              <Link
                key={index}
                href={elem.href}
                className={`duration-300 cursor-pointer pb-1 
            ${
              router.pathname == `${elem.href}`
                ? "text-primary border-primary border-b-2"
                : ""
            } `}
                title={elem.title}
              >
                <span className="hidden md:block lg:block">{elem.title}</span>
                <span>
                  {
                    <elem.icon
                      size={22}
                      className="lg:hidden md:hidden block"
                    />
                  }
                </span>
              </Link>
            );
          })}

          <Button title="Get started" style="text-[11px] p-2 hidden md:block" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
