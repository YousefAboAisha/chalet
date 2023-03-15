import BreakLine from "Components/UI/BreakLine";
import FeatureCard from "Components/UI/FeatureCard";
import IconTag from "Components/UI/IconTag";
import { StarsRating } from "Components/UI/StarsRating";
import Tag from "Components/UI/Tag";
import React from "react";
import { BiCoinStack, BiCommentDetail } from "react-icons/bi";
import { FiMapPin, FiWifi } from "react-icons/fi";

const ChaletDetails = () => {
  return (
    <div className="relative mt-8 text-text_light dark:text-text_dark">
      <h2 className="font-bold text-3xl">Chalet Name</h2>
      <StarsRating />

      <BreakLine />

      <div className="flex flex-row gap-6 items-center mt-4">
        <IconTag title="Gaza" Icon={FiMapPin} />
        <IconTag title="300$ to 450$" Icon={BiCoinStack} />
        <IconTag title="No reviews" Icon={BiCommentDetail} />
      </div>

      <div className="flex flex-row gap-2 mt-2">
        <div className="flex gap-2 items-center">
          <Tag title="Summer" />
          <Tag title="Swimming" />
          <Tag title="Intertainment" />
          <Tag title="Games" />
        </div>
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

      <div className="grid mt-4 grid-cols-2 md:grid-cols-2  lg:grid-cols-3 gap-2">
        <FeatureCard
          active={true}
          title="WI-FI"
          Icon={FiWifi}
          details="Strong Wifi connection"
        />

        <FeatureCard
          active={false}
          title="WI-FI"
          Icon={FiWifi}
          details="Strong Wifi connection"
        />

        <FeatureCard
          active={true}
          title="WI-FI"
          Icon={FiWifi}
          details="Strong Wifi connection"
        />

        <FeatureCard
          active={false}
          title="WI-FI"
          Icon={FiWifi}
          details="Strong Wifi connection"
        />

        <FeatureCard
          active={false}
          title="WI-FI"
          Icon={FiWifi}
          details="Strong Wifi connection"
        />

        <FeatureCard
          active={true}
          title="WI-FI"
          Icon={FiWifi}
          details="Strong Wifi connection"
        />
      </div>

      <div className="mt-8">
        <h2 className="font-bold text-3xl">Reviews</h2>
        <BreakLine />
      </div>
    </div>
  );
};

export default ChaletDetails;
