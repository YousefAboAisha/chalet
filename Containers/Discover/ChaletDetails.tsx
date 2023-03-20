import FeatureCard from "Components/UI/Cards/FeatureCard";
import BreakLine from "Components/UI/Utils/BreakLine";
import IconTag from "Components/UI/Utils/IconTag";
import SocialIcons from "Components/UI/Utils/SocialIcons";
import Tag from "Components/UI/Utils/Tag";
import React from "react";
import { BiCoinStack, BiCommentDetail, BiFootball } from "react-icons/bi";
import { BsDisplay } from "react-icons/bs";
import { FaSwimmingPool } from "react-icons/fa";
import { FiMapPin, FiWifi } from "react-icons/fi";
import { GiBarbecue } from "react-icons/gi";
import { IoMdFootball } from "react-icons/io";
import { MdGarage } from "react-icons/md";
import { TbSoccerField, TbToolsKitchen } from "react-icons/tb";
import ReactStars from "react-stars";
import Review from "./review";

const ChaletDetails = () => {
  return (
    <div className="relative mt-8 text-text_light dark:text-text_dark">
      <h2 className="font-bold text-3xl">Chalet Name</h2>

      <div className="flex gap-2 items-center my-1 justify-between">
        <div className="flex items-center gap-2">
          <ReactStars
            count={5}
            value={4}
            // onChange={() => setValue(value)}
            size={14}
            color2={"#D61355"}
            color1={"#DDD"}
            edit={false}
          />

          <div className="text-[12px]">4 out of (5)</div>
        </div>
        <SocialIcons />
      </div>

      <BreakLine />

      <div className="flex flex-row gap-6 items-center mt-4">
        <IconTag title="Gaza" Icon={FiMapPin} />
        <IconTag title="300$ to 450$" Icon={BiCoinStack} />
        <IconTag title="No reviews" Icon={BiCommentDetail} />
      </div>

      <div className="flex flex-row gap-2 mt-4 overflow-x-scroll hidden-scroll ">
        <Tag title="Summer" />
        <Tag title="Swimming" />
        <Tag title="Intertainment" />
        <Tag title="Games" />
      </div>

      <p className="mt-6 opacity-90">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      <div className="grid mt-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <FeatureCard
          active={true}
          title="WI-FI"
          Icon={FiWifi}
          details="Strong Wifi connection"
        />

        <FeatureCard
          active={false}
          title="Barbecue"
          Icon={GiBarbecue}
          details="Modern barbecue tools"
        />

        <FeatureCard
          active={true}
          title="Kitchen"
          Icon={TbToolsKitchen}
          details="Fully customized kithcen"
        />

        <FeatureCard
          active={false}
          title="Swimming Pool"
          Icon={FaSwimmingPool}
          details="Wide & clean swimming pool"
        />

        <FeatureCard
          active={false}
          title="Playgrounds"
          Icon={TbSoccerField}
          details="Playgrounds for Basket & Football"
        />

        <FeatureCard
          active={true}
          title="TV show"
          Icon={BsDisplay}
          details="High resolution & 4k screens"
        />

        <FeatureCard
          active={true}
          title="Football"
          Icon={IoMdFootball}
          details="Wide football playground"
        />

        <FeatureCard
          active={false}
          title="Car garage"
          Icon={MdGarage}
          details="Modern cars garage"
        />
      </div>

      <div className="mt-8">
        <h2 className="font-bold text-3xl">Reviews</h2>
        <BreakLine />
        <Review />
      </div>
    </div>
  );
};

export default ChaletDetails;
