type HeadingProps = {
  title: string;
  additionalStyles?: string;
  details?: string;
};

const Heading = ({ title, additionalStyles, details }: HeadingProps) => {
  return (
    <h2
      className={`group relative text-5xl font-semibold duration-500 uppercase text-text_dark dark:text-text_dark z-10 ${additionalStyles}  `}
    >
      {title}

      {details ? (
        <p className="text-sm text-center mx-auto font-normal mt-4 w-11/12 lg:w-6/12 opacity-90">
          {details}
        </p>
      ) : null}
    </h2>
  );
};

export default Heading;
