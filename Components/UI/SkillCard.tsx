import Image, { StaticImageData } from "next/image"

type SkillCardProps = {
  title: string
  icon: StaticImageData
}

const SkillCard = ({ title, icon }: SkillCardProps) => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-1 drop-shadow-lg rounded-xl p-4  border bg-background_light dark:bg-background_dark shadow-md hover:bg-primary hover:translate-y-2 dark:hover:bg-primary dark:hover:translate-y-2 duration-500 cursor-pointer animate-ShadowPulse text-text_light dark:text-text_dark border-light dark:border-dark ">
      <Image src={icon} width={70} height={70} alt="image" />
      <span className="uppercase font-semibold font-secondary">{title}</span>
    </div>
  )
}

export default SkillCard
