import React, { useState } from "react";
import { BiMailSend } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import Button from "Components/UI/Inputs/Button";
import Heading from "Components/UI/Typography/Heading";
import Input from "Components/UI/Inputs/Input";

const Subscripe = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="section flex flex-col items-center justify-center">
      <div className="lg:w-8/12 w-full">
        <Heading
          title="Subscribe to get the latest news about us"
          details="We recommend you to subscribe by dropping your email below to get dailty updates about us"
          additionalStyles="text-center mx-auto"
          detailsStyles="w-full lg:w-full"
        />
      </div>

      <div className="relative w-full lg:w-9/12 mx-auto mt-8">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email address"
          icon={<BiMailSend size={27} />}
        />

        <div className="absolute w-fit text-[12px] top-[50%] translate-y-[-50%] right-0 h-[56px]">
          <Button
            title="Subscribe Now"
            style="hidden md:block lg:block h-full rounded-l-none"
          />

          <div className="bg-primary text-text_dark h-full rounded-[25px] rounded-l-none w-14 lg:hidden md:hidden flex justify-center items-center cursor-pointer">
            <FiSend size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscripe;
