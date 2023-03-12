import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Spinner from "./UI/Spinner";
import { PopularData } from "Data/popularData";
import CustomImage from "./UI/CustomImage";
import { FiMapPin } from "react-icons/fi";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 550 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 550, min: 0 },
    items: 1,
  },
};

export default function Slider() {
  return (
    <Carousel
      responsive={responsive}
      className="relative mt-8 flex gap-2"
      autoPlay
    >
      {PopularData.map((elem, index) => {
        return (
          <div className="relative group mx-2" key={index}>
            <CustomImage
              src={elem.src}
              width={400}
              height={400}
              alt="faw"
              title={elem.title}
            />
            <div className="absolute group-hover:opacity-100 opacity-0 duration-500 bottom-0 left-0 min-h-1/4 w-full text-text_dark bg-[#0000002a] backdrop-blur-sm p-2 rounded-b-2xl">
              <h2 className="flex items-center gap-2">
                <FiMapPin />
                {elem.title}
              </h2>
              <p className="opacity-90 text-sm font-normal">{elem.info}</p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
