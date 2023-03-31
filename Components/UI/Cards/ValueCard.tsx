import { IconType } from "react-icons";

type SkillCardProps = {
  Icon: IconType;
  title: string;
  details: string;
};

const ValueCard = ({ Icon, title, details }: SkillCardProps) => {
  return (
    <div className="relative full-theme flex flex-col justify-center items-center rounded-xl p-6 duration-500 shadow-lg hover:border hover:border-primary hover:-translate-y-1 ">
      <div className="border border-theme p-2 rounded-xl mt-4">
        <Icon size={55} />
      </div>

      <h2 className="uppercase font-bold text-lg mt-4">{title}</h2>
      <p className="text-center mt-4 h-16 font-normal">{details}</p>
      {/* <span className="text-primary mt-4 cursor-pointer">Read More</span> */}
    </div>
  );
};

export default ValueCard;
