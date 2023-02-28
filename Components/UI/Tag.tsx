import React from "react"

type TagProps = {
  title: string
}

function Tag({ title }: TagProps) {
  return (
    <div className="text-[12px] dark:background_dark background_dark_light text-text_light dark:text-text_dark  font-normal w-fit px-3 py-1 rounded-xl h-fit uppercase shadow-sm border border-light dark:border-dark">
      {title}
    </div>
  )
}

export default Tag
