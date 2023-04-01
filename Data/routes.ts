import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { MdOutlineTravelExplore } from "react-icons/md";

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
    icon: MdOutlineTravelExplore,
    path: "/[discover]",
  },
  {
    title: "About",
    href: "/about",
    icon: AiOutlineUser,
    path: "/about",
  },
];
