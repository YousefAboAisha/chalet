import Image, { StaticImageData } from "next/image";
import { IconType } from "react-icons";

type SkillCardProps = {
  Icon: IconType;
  title: string;
  details: string;
};

const ValueCard = ({ Icon, title, details }: SkillCardProps) => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-1 rounded-xl p-4 text-text_dark border border-border_dark duration-500 shadow-lg hover:border hover:border-primary hover:-translate-y-1">
      <div className="border border-border_dark p-2 rounded-xl mt-4">
        <Icon size={50} />
      </div>

      <h2 className="uppercase font-semibold font-secondary mt-2">{title}</h2>
      <p className="text-center mt-2">{details}</p>
      <span className="text-primary mt-4 cursor-pointer">Read More</span>
    </div>
  );
};

export default ValueCard;
