import { IconType } from "react-icons";
import { GoPrimitiveDot } from "react-icons/go";

type FeatureCardType = {
  active: boolean;
  Icon: IconType;
  title: string;
  details: string;
};

const FeatureCard = ({ active, Icon, title, details }: FeatureCardType) => {
  let isActive = active ? "text-[#44bd32]" : "text-[#F00]";
  let opacity = active ? "opacity-100" : "opacity-50";
  console.log(isActive);

  return (
    <div
      className={`flex gap-4 items-center text-text_light dark:text-text_dark border border-light dark:border-dark p-4 rounded-2xl shadow-sm ${opacity}`}
    >
      <Icon size={30} />
      <div className="flex flex-col">
        <span className="font-bold text-sm">{title}</span>
        <p className="text-[12px] opacity-80">{details}</p>
      </div>

      <GoPrimitiveDot className={isActive} />
    </div>
  );
};

export default FeatureCard;
