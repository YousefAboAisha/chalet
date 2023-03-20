import { IconType } from "react-icons";
import { GoPrimitiveDot } from "react-icons/go";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

type FeatureCardType = {
  id: string;
  active: boolean;
  Icon: IconType;
  title: string;
  details: string;
};

const FeatureCard = ({ id, active, Icon, title, details }: FeatureCardType) => {
  let isActive = active ? "text-[#44bd32]" : "text-[#F00]";
  let opacity = active ? "opacity-100" : "opacity-30";
  // console.log(isActive);

  return (
    <>
      <div
        className={`relative flex flex-col gap-2 items-center justify-center bg-background_light dark:bg-background_dark text-text_light dark:text-text_dark border border-light dark:border-dark p-4 rounded-2xl shadow-sm ${opacity} `}
        data-tooltip-id={id}
        data-tooltip-content={details}
      >
        <Icon size={25} />
        {/* <span className="font-bold text-sm">{title}</span> */}
        <GoPrimitiveDot
          size={12}
          className={`${isActive} w-fit absolute top-1 right-1`}
        />
      </div>

      <Tooltip
        id={id}
        className="full-theme !max-w-3/12 !w-fit !p-3 !h-fit opacity-100"
      />
    </>
  );
};

export default FeatureCard;
