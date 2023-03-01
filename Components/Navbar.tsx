import { Routes } from "Data/routes";
import { useScrollDirection } from "Hooks/useScrollDirection";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const [Style, setStyle] = useState("");
  const path = router.pathname;
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`fixed w-full h-[70px] top-0 left-0 z-20 items-center bg-[#EEE] duration-500 ${
        scrollDirection === "down"
          ? "shadow-lg border-b"
          : "shadow-0 border-b-0"
      } `}
    >
      <div className="container flex flex-row justify-between items-center h-full">
        <div className="text-2xl">Chalet</div>
        <div
          className={`flex items-center justify-center gap-4 md:gap-6 lg:gap-8`}
        >
          {Routes.map((elem, index) => {
            return (
              <Link
                key={index}
                href={elem.href}
                className={`duration-300 cursor-pointer 
            ${
              router.pathname == `${elem.href}`
                ? "text-primary border-b border-primary border-b-2"
                : ""
            } `}
                title={elem.title}
              >
                {elem.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
