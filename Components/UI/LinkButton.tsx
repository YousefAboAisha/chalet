type LinkButtonProps = {
  title: string
  style?: string
  icon?: JSX.Element
  href: string
} & React.ComponentProps<"a">

const LinkButton = ({ title, icon, href, style, ...rest }: LinkButtonProps) => {
  return (
    <a
      href={href}
      className={`flex flex-row gap-2 items-center font-secondary relative uppercase bg-primary text-white w-full py-[10px] outline-none justify-center disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer transition shadow-sm rounded-md border-transparent border-[1px] hover:bg-primary_hover hover:border-[1px] duration-500 ${style}`}
      {...rest}
    >
      {title} {icon}
    </a>
  )
}

export default LinkButton
