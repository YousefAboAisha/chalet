import Select from "Components/UI/Select";
import { dummyData } from "Data/dummyData";
import { GoSettings } from "react-icons/go";
import React, { useState } from "react";
import Input from "Components/UI/Input";
import { BsSearch } from "react-icons/bs";

const Filters = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="section flex flex-row justify-between items-center gap-4">
      <div className="w-full md:w-10/12 lg:w-9/12 flex flex-row gap-2">
        <Input
          type={"search"}
          placeholder={"Search for Chalets to reserve!"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          icon={<BsSearch size={24} />}
          style="bg-background_light dark:bg-background_light !text-text_light !dark:text-text_dark rounded-lg"
        />
      </div>

      <div className="cursor-pointer w-12 h-12 flex items-center justify-center p-2 border border-border_dark rounded-md bg-border_dark">
        <GoSettings size={25} className="" />
      </div>
    </div>
  );
};

export default Filters;
