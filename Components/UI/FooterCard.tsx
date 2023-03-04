import { IconType } from "react-icons/lib";

type FooterCardProps = {
  label: string;
  value: string;
  Icon: IconType;
  href?: string;
};

const FooterCard = ({ label, value, Icon }: FooterCardProps) => {
  return (
    <div className="relative p-2">
      <div className="flex flex-row gap-6 items-center">
        <Icon size={27} />
        <div className="flex flex-col">
          <h4 className="font-semibold font-secondary">{label}</h4>
          <span className="font-normal font-secondary">{value}</span>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
