import Image from "next/image";
import { useState } from "react";
import { FiMapPin } from "react-icons/fi";

type CustomImageProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  title?: string;
  info?: string;
} & React.ComponentProps<"img">;

const CustomImage = ({
  src,
  width,
  height,
  alt,
  className,
  title,
  info,
}: CustomImageProps) => {
  const [Img, setImg] = useState(src);

  return (
    <div
      className={`group relative h-[400px] max-h-[400px] rounded-2xl duration-500`}
    >
      <Image
        src={Img}
        width={width}
        height={height}
        alt={alt}
        onError={() => setImg("/notFound.jpg")}
        loading="lazy"
        className="w-full h-full rounded-2xl"
      />

      <div className="absolute group-hover:opacity-100 opacity-0 duration-500 bottom-0 left-0 min-h-1/4 w-full text-text_dark bg-[#0000002a] backdrop-blur-sm p-2">
        <h2 className="flex items-center gap-2">
          <FiMapPin />
          {title}
        </h2>
        <p className="opacity-90 text-sm font-normal">{info}</p>
      </div>
    </div>
  );
};

export default CustomImage;
