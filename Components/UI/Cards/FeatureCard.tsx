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
  // console.log(isActive);

  return (
    <div
      className={`relative flex flex-col gap-2 items-center justify-center bg-background_light dark:bg-background_dark text-text_light dark:text-text_dark border border-light dark:border-dark p-3 rounded-2xl shadow-sm ${opacity}`}
    >
      <Icon size={30} />
      <span className="font-bold text-sm">{title}</span>
      <p className="text-[12px] opacity-80 text-center">{details}.</p>

      <GoPrimitiveDot className={`${isActive} w-fit absolute top-3 right-3`} />
    </div>
  );
};

export default FeatureCard;
