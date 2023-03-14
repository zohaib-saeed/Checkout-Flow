import React from "react";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { Fade } from "react-awesome-reveal";

const VariationCard = () => {
  return (
    <Fade className="w-full sm:w-[550px]" direction="right" triggerOnce>
      <div className="w-full sm:w-[550px] bg-balticSea rounded-3xl flex items-center sm:items-start justify-start gap-3 xs:gap-5 sm:gap-7 p-4 sm:p-6 cursor-pointer">
        <div className="w-[100px] sm:w-[117px] h-[100px] sm:h-[117px] flex items-center justify-center relative rounded-lg overflow-hidden">
          <Image
            src="/images/sample-main.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1  flex items-center justify-between gap-5 xs:gap-7 sm:gap-10">
          <div className="flex  flex-col items-start justify-start  sm:gap-1 ">
            <h1 className="text-white font-bold text-lg sm:text-xl">
              Variation # 1
            </h1>
            <p className="text-[14px] sm:text-[15px] text-osloGrey text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
          <ChevronRightIcon className="w-[50px] h-[50px] min-w-[20px] xs:min-w-0 min-h-[20px] xs:min-h-0 text-white" />
        </div>
      </div>
    </Fade>
  );
};

export default VariationCard;
