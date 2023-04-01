import { Routes } from "Data/routes";
import { useScrollDirection } from "Hooks/useScrollDirection";
import Link from "next/link";
import { useRouter } from "next/router";
import { GiIsland } from "react-icons/gi";
import Button from "./UI/Inputs/Button";

const Navbar = () => {
  const router = useRouter();
  const scrollDirection = useScrollDirection();

  // console.log("This is router", router);

  return (
    <nav
      className={`fixed w-full h-[70px] top-0 left-0 z-[10000] items-center bg-theme text-theme duration-500 shadow-lg ${
        scrollDirection === "down" ? "" : ""
      } `}
    >
      <div className="container flex flex-row justify-between items-center h-full">
        <Link href={"/"} className="flex items-center gap-2 text-2xl">
          <span className="hidden md:block">Chalet</span>
          <GiIsland size={35} className="text-theme" />
        </Link>

        <div
          className={`flex items-center justify-center gap-8 md:gap-6 lg:gap-8`}
        >
          {Routes.map((elem, index) => {
            return (
              <Link
                key={index}
                href={elem.href}
                className={`duration-300 cursor-pointer 
            ${router.pathname == `${elem.path}` ? "text-primary" : ""} `}
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

          <Link href={"/discover"}>
            <Button
              title="Get started"
              style="text-[11px] p-2 hidden md:block"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
