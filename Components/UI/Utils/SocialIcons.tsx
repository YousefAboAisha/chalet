import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const SocialIcons = () => {
  return (
    <div className="relative flex gap-3 text-theme items-center">
      <Link
        href={"https://www.instagram.com/yousef_aboesha/"}
        className="border-theme rounded-full p-2"
        target="_blank"
      >
        <FiFacebook size={14} />
      </Link>

      <Link
        href={"https://www.instagram.com/yousef_aboesha/"}
        className="border-theme rounded-full p-2"
        target="_blank"
      >
        <FiInstagram size={14} />
      </Link>

      <Link
        href={"https://www.instagram.com/yousef_aboesha/"}
        className="border-theme rounded-full p-2"
        target="_blank"
      >
        <FaWhatsapp size={14} />
      </Link>

      <Link
        href={"https://www.instagram.com/yousef_aboesha/"}
        className="border-theme rounded-full p-2"
        target="_blank"
      >
        <FiTwitter size={14} />
      </Link>
    </div>
  );
};

export default SocialIcons;
