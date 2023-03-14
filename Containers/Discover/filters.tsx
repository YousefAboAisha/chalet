import Select from "Components/UI/Select";
import { dummyData } from "Data/dummyData";
import { GoSettings } from "react-icons/go";
import React, { useState } from "react";
import Input from "Components/UI/Input";
import { BsSearch } from "react-icons/bs";
import Modal from "Components/UI/Modal";
import Menu from "Components/UI/Menu";

const Filters = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="section flex flex-row justify-between items-center gap-4">
      <div className="w-full md:w-10/12 lg:w-9/12 flex flex-row gap-2">
        <Input
          type={"search"}
          placeholder={"Search for Chalets to reserve!"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          icon={<BsSearch size={20} className="" />}
          style="rounded-lg"
        />
      </div>

      <div
        className="cursor-pointer w-12 h-12 flex items-center justify-center p-2 border border-border_light dark:border-dark rounded-md"
        onClick={() => setIsOpen(true)}
      >
        <GoSettings size={25} className="dark:text-text_dark" />
      </div>

      <Menu setIsOpen={setIsOpen} isOpen={isOpen} />

      <Modal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        zIndex="z-[9998]"
        bg="bg-transparent"
      />
    </div>
  );
};

export default Filters;
