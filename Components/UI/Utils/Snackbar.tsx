import React from "react"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"

type SnackbarProps = {
  message: string
  IsActive: boolean
}

const Snackbar = ({ message, IsActive }: SnackbarProps) => {
  return (
    <div
      className={`fixed flex flex-row gap-2 items-center z-50 bg-primary p-2 px-2 rounded-sm min-w-[20%] text-md shadow-lg top-5 ${
        IsActive ? "left-5 duration-1000" : "-left-[100%] duration-1000"
      }`}
    >
      <IoMdCheckmarkCircleOutline size={23} />
      <span className="font-secondary">{message}</span>
    </div>
  )
}

export default Snackbar
