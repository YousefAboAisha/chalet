import { dummyData } from "Data/dummyData";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FiDollarSign, FiMap, FiMapPin } from "react-icons/fi";
import Button from "./Button";
import Input from "./Input";
import Select from "./Select";

type MenuType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Menu = ({ isOpen, setIsOpen }: MenuType) => {
  const [price, setprice] = useState({
    min: "",
    max: "",
  });

  return (
    <div
      className={`w-[320px] top-10 right-0 bg-background_light dark:bg-background_dark
    z-[9999] border border-light dark:border-dark shadow-2xl p-4 rounded-lg ${
      isOpen ? "absolute" : "hidden"
    } duration-300 `}
    >
      <FaTimes
        size={16}
        className="absolute top-2 left-2 cursor-pointer hover:text-primary dark:hover:text-primary duration-300 text-text_light dark:text-text_dark"
        onClick={() => setIsOpen(false)}
      />

      <div className="relative flex flex-col gap-4 mt-6">
        <Select
          options={dummyData}
          title="Region"
          icon={<FiMapPin />}
          style="h-[50px] text-sm rounded-[8px]"
        />

        <div className="flex flex-row gap-2">
          <Input
            type={"number"}
            placeholder="From"
            value={price.min}
            onChange={(e) =>
              setprice({
                ...price,
                min: e.target.value,
              })
            }
            style="h-[50px] text-sm rounded-[8px] pl-10"
            icon={<FiDollarSign />}
          />

          <Input
            type={"number"}
            placeholder="To"
            value={price.max}
            onChange={(e) =>
              setprice({
                ...price,
                max: e.target.value,
              })
            }
            style="h-[50px] text-sm rounded-[8px] pl-10"
            icon={<FiDollarSign />}
          />
        </div>

        <div className="relative w-fit text-sm mt-1">
          <Button
            onClick={() => setIsOpen(false)}
            title="Confirm"
            style="py-2 px-3 text-[13px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
