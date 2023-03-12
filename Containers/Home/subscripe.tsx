import React, { useState } from "react";
import Heading from "Components/UI/Heading";
import Input from "Components/UI/Input";
import { BiMailSend } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import Button from "Components/UI/Button";

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

        <div className="absolute w-fit text-[12px] top-[50%] translate-y-[-50%] right-[1.2%]">
          <Button title="Subscribe Now" style="py-3 hidden md:block lg:block" />

          <div className="bg-primary text-text_dark p-2 rounded-[15px] block lg:hidden md:hidden mr-1 cursor-pointer">
            <FiSend size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscripe;
