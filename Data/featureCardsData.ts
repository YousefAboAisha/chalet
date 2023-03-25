import { FiWifi } from "react-icons/fi";
import { BsDisplay } from "react-icons/bs";
import { FaSwimmingPool } from "react-icons/fa";
import { GiBarbecue } from "react-icons/gi";
import { IoMdFootball } from "react-icons/io";
import { MdGarage } from "react-icons/md";
import { TbSoccerField, TbToolsKitchen } from "react-icons/tb";

export const FeatureCardsData = [
  {
    id: "one",
    active: true,
    title: "WI-FI",
    Icon: FiWifi,
    details: "Strong Wifi connection",
  },
  {
    id: "two",
    active: false,
    title: "Barbecue",
    Icon: GiBarbecue,
    details: "Modern barbecue tools",
  },
  {
    id: "three",
    active: true,
    title: "Kitchen",
    Icon: TbToolsKitchen,
    details: "Fully customized kitchen",
  },
  {
    id: "four",
    active: false,
    title: "Swimming Pool",
    Icon: FaSwimmingPool,
    details: "Wide & clean swimming pool",
  },
  {
    id: "five",
    active: false,
    title: "Playgrounds",
    Icon: TbSoccerField,
    details: "Playgrounds for Basket & Football",
  },
  {
    id: "six",
    active: true,
    title: "TV show",
    Icon: BsDisplay,
    details: "High resolution & 4k screens",
  },
  {
    id: "seven",
    active: true,
    title: "Football",
    Icon: IoMdFootball,
    details: "Wide football playground",
  },
  {
    id: "eight",
    active: false,
    title: "Car garage",
    Icon: MdGarage,
    details: "Modern cars garage",
  },
];
