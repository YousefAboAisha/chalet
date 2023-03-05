import React, { useState } from "react";
import Heading from "Components/UI/Heading";
import Input from "Components/UI/Input";
import { BiMailSend } from "react-icons/bi";
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

      <div className="relative w-full h-fit mt-8">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter your email address"
          icon={<BiMailSend size={27} />}
        />

        <div className="absolute w-fit text-[12px] top-[50%] translate-y-[-50%] right-[13.4%]">
          <Button title="Subscribe Now" style="py-3" />
        </div>
      </div>
    </div>
  );
};

export default Subscripe;
