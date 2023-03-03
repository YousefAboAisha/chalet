import Image from "next/image";
import { useState } from "react";

type CustomImageProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
} & React.ComponentProps<"img">;

const CustomImage = ({
  src,
  width,
  height,
  alt,
  className,
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
        className={`w-full h-full rounded-2xl ${className}`}
      />
    </div>
  );
};

export default CustomImage;
