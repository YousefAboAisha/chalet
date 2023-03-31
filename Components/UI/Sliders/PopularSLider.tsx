import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { PopularData } from "Data/popularData";
import CustomImage from "../Cards/CustomImage";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 2000, min: 1400 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1400, min: 850 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 850, min: 550 },
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
      infinite
    >
      {PopularData.map((elem, index) => {
        return (
          <div className="relative group mx-2" key={index}>
            <CustomImage
              src={elem.src}
              width={500}
              height={500}
              alt="faw"
              title={elem.title}
            />
          </div>
        );
      })}
    </Carousel>
  );
}
