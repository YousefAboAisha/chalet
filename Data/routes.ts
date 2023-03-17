import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineImageSearch } from "react-icons/md";
import { VscMailRead } from "react-icons/vsc";

export const Routes = [
  {
    title: "Home",
    href: "/",
    icon: AiOutlineHome,
    path: "/",
  },
  {
    title: "Discover",
    href: "/discover",
    icon: MdOutlineImageSearch,
    path: "/[discover]",
  },
  {
    title: "About",
    href: "/about",
    icon: VscMailRead,
    path: "/about",
  },
];
