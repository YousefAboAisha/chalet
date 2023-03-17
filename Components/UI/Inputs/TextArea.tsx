type TextAreaProps = {
  value: string;
  // handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder: string;
  style?: string;
} & React.ComponentProps<"textarea">;

const TextArea = ({ placeholder, style, ...rest }: TextAreaProps) => {
  return (
    <textarea
      {...rest}
      className={`px-3 pt-3 full-theme rounded-[8px] outline-none duration-300 w-full focus:valid:border-primary focus:border-primary dark:focus:border-primary disabled:cursor-not-allowed resize-none ${style}`}
      placeholder={placeholder}
      rows={5}
    ></textarea>
  );
};

export default TextArea;
