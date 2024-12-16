import React from "react";
import Image from "next/image";
import { ICONS_PATH } from "@/constant/icons";

export const Logo = () => {
  return <div className="flex justify-center items-center mb-[48px]">
    <Image src={ICONS_PATH.LOGO} alt="logo" width={200} height={200} />
  </div>
};

export default Logo;