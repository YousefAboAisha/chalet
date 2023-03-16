import { IconType } from "react-icons";

type IconTagsType = {
  Icon: IconType;
  title: string;
};

const IconTag = ({ Icon, title }: IconTagsType) => {
  return (
    <div className="flex gap-1 items-center text-text_light dark:text-text_dark">
      <Icon />
      <span className="text-sm">{title}</span>
    </div>
  );
};

export default IconTag;
