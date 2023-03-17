import { useRouter } from "next/router";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const HeadingTitle = () => {
  const router = useRouter();

  const { chalet_id } = router.query;

  console.log(router);

  return (
    <div className="flex flex-row gap-1 items-center mt-8 mb-4 text-text_light dark:text-text_dark">
      <span className="">Home</span>
      <IoIosArrowForward />
      <span className="">Discover</span>
      <IoIosArrowForward />
      <span className="underline">Chalet Name {chalet_id} </span>
    </div>
  );
};

export default HeadingTitle;
