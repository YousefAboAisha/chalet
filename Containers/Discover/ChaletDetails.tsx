import FeatureCard from "Components/UI/Cards/FeatureCard";
import BreakLine from "Components/UI/Utils/BreakLine";
import IconTag from "Components/UI/Utils/IconTag";
import SocialIcons from "Components/UI/Utils/SocialIcons";
import Tag from "Components/UI/Utils/Tag";
import { FeatureCardsData } from "Data/featureCardsData";
import React, { useState } from "react";
import { BiCoinStack, BiCommentDetail } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
import ReactStars from "react-stars";
import Calendar from "./calendar";
import Review from "./review";

const ChaletDetails = () => {
  const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting  industry. Lorem Ipsum has been the industrys standard dummy text ever  since the 1500s, when an unknown printer took a galley of type and  scrambled. It has survived not only five centuries, but also the leap  into electronic typesetting, remaining essentially unchanged. It was  popularised in the 1960s with the release of Letraset sheets containing  Lorem Ipsum passages, and more recently with desktop publishing software  like Aldus PageMaker including versions of Lorem Ipsum.";

  const [allTextIsShown, setallTextIsShown] = useState(false);
  const renderredText = allTextIsShown ? text : text.slice(0, text.length / 2);

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

      <p className="mt-4 opacity-90">
        {renderredText}
        <span
          onClick={() => setallTextIsShown(!allTextIsShown)}
          className="text-primary font-bold cursor-pointer mx-1"
        >
          {allTextIsShown ? "Read less" : "Read More"}
        </span>
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4">
        {FeatureCardsData.map((elem) => {
          return (
            <FeatureCard
              id={elem.id}
              key={elem.id}
              active={elem.active}
              Icon={elem.Icon}
              title={elem.title}
              details={elem.details}
            />
          );
        })}
      </div>

      {/* <Calendar /> */}

      <div className="mt-8">
        <h2 className="font-bold text-3xl">Reviews</h2>
        <BreakLine />
        <Review />
      </div>
    </div>
  );
};

export default ChaletDetails;
