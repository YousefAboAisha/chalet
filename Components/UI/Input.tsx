type InputProps = {
  value: string;
  // handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string;
  style?: string;
  icon?: JSX.Element;
} & React.ComponentProps<"input">;

const Input = ({ value, placeholder, style, icon, ...rest }: InputProps) => {
  return (
    <div className="relative dark:bg-background_dark bg-background_light rounded-[25px] w-9/12 mx-auto">
      <div className="absolute flex justify-center p-2 rounded-l-md items-center left-2 top-[50%] translate-y-[-50%] h-full border-none outline-none text-text_light dark:text-white">
        {icon}
      </div>

      <input
        value={value}
        {...rest}
        className={`h-[56px] pl-12 border border-light dark:border-dark text-text_light dark:text-text_dark rounded-[25px] outline-none duration-300 w-full focus:valid:border-primary focus:border-primary dark:focus:border-primary disabled:cursor-not-allowed dark:bg-background_dark bg-background_light ${style}`}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
