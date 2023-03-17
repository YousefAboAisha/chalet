import { AiOutlineLoading3Quarters } from "react-icons/ai";

type ButtonProps = {
  title: string;
  style?: string;
  icon?: JSX.Element;
  loading?: boolean;
} & React.ComponentProps<"button">;

const Button = ({
  title,
  icon,
  style,
  loading,
  children,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`relative uppercase bg-primary text-white w-full p-3 py-[10px] outline-none flex justify-center gap-3 items-center disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer transition shadow-sm rounded-[25px] border-transparent border-[1px] hover:bg-primary_hover hover:border-[1px] duration-500 ${style}`}
    >
      <span className="flex flex-row gap-2 items-center font-secondary">
        {title}
        {loading ? (
          <AiOutlineLoading3Quarters size={20} className="animate-spin" />
        ) : (
          icon
        )}
      </span>
      {children}
    </button>
  );
};

export default Button;
