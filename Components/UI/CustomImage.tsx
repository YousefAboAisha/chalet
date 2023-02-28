import Image from "next/image"
import { useState } from "react"

type CustomImageProps = {
  src: string
  width: number
  height: number
  alt: string
  className?: string
} & React.ComponentProps<"img">

const CustomImage = ({
  src,
  width,
  height,
  alt,
  className,
}: CustomImageProps) => {
  const [Img, setImg] = useState(src)

  return (
    <Image
      src={Img}
      width={width}
      height={height}
      alt={alt}
      onError={() => setImg("/notFound.jpg")}
      loading="lazy"
      className={className}
    />
  )
}

export default CustomImage
