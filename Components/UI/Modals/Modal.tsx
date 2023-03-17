import React, { Dispatch, SetStateAction } from "react";

type ModalType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  bg?: string;
  zIndex: string;
};

const Modal = ({
  setIsOpen,
  isOpen,
  bg = "bg-[#00000057]",
  zIndex,
}: ModalType) => {
  return isOpen ? (
    <div
      className={`fixed w-screen h-screen left-0 top-0 ${zIndex} ${bg} duration-300`}
      onClick={() => setIsOpen(false)}
    ></div>
  ) : null;
};

export default Modal;
