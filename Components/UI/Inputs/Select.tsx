import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type SelectProps = {
  title: string;
  options: {
    title: string;
    id: number;
  }[];
  style?: string;
  icon?: JSX.Element;
} & React.ComponentProps<"select">;

const Select = ({ title, options, icon, style, ...rest }: SelectProps) => {
  const [IsActive, setIsActive] = useState(false);

  return (
    <div className="relative bg-theme">
      <div className="absolute flex justify-center p-2 rounded-l-md items-center left-1 top-[50%] translate-y-[-50%] h-full border-none outline-none text-text_light dark:text-white">
        {icon}
      </div>

      <div className="absolute flex justify-center p-2 rounded-l-md items-center right-1 top-[50%] translate-y-[-50%] h-full border-none outline-none text-white">
        <IoIosArrowDown
          size={20}
          className={`${
            IsActive ? "rotate-180" : "0"
          } duration-300 text-text_light dark:text-white`}
        />
      </div>

      <select
        className={`relative h-[56px] pl-10 border border-light dark:border-dark text-text_light dark:text-text_dark rounded-[8px] outline-none duration-300 w-full focus:valid:border-primary focus:border-primary disabled:cursor-not-allowed bg-transparent cursor-pointer ${style}`}
        {...rest}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
      >
        <option value="" disabled hidden selected>
          {title}
        </option>

        {options.map((elem) => {
          return (
            <option
              key={elem.id}
              className="bg-theme p-2"
              value={elem.id}
              onChange={() => setIsActive(false)}
            >
              {elem.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
