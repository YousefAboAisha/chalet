type IconProps = {
  icon: JSX.Element
}

const Icon = ({ icon }: IconProps) => {
  return <div className="text-primary dark:text-white">{icon}</div>
}

export default Icon
