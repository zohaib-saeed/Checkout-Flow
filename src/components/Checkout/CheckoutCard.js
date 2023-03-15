import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const CheckoutCard = () => {
  return (
    <Fade direction="right" triggerOnce className="w-full sm:w-[550px]">
      <div className="w-full sm:w-[500px] bg-balticSea rounded-3xl flex items-center sm:items-start justify-start gap-3 xs:gap-5 sm:gap-7 p-4 sm:p-6 pr-7 sm:pr-9 cursor-pointer">
        <div className="w-[100px] sm:w-[117px] h-[100px] sm:h-[117px] flex items-center justify-center relative rounded-lg overflow-hidden">
          <Image
            src="/images/sample-main.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 flex  flex-col items-start justify-start  sm:gap-1 ">
          <h1 className="text-white font-bold text-lg sm:text-xl">Route # 1</h1>
          <p className="text-[14px] sm:text-[15px] text-osloGrey ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
    </Fade>
  );
};

export default CheckoutCard;
