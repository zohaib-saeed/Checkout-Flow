import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Confirmation = () => {
  return (
    <div className="w-full flex items-center justify-start flex-col pb-16 sm:pb-20 md:pb-24 lg:pb-28">
      <div className="w-full flex flex-col items-center justify-start max-w-[1350px]">
        <div className="w-full flex items-center justify-start flex-col gap-7 md:gap-9 lg:gap-12">
          {/* Logo  */}
          <div className="w-full flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 pt-4 sm:pt-7 md:pt-9 lg:pt-12">
            <div className="w-[120px] h-[108px] flex items-center justify-center relative">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </div>
          {/* Ticket  */}
          <div className="w-full max-w-[510px] bg-mirage flex items-center justify-between flex-col gap-12 py-9 px-6 xs:px-12 rounded-3xl">
            <div className="w-full flex flex-col items-center justify-start gap-4 overflow-x-hidden">
              <Fade direction="right" triggerOnce className="w-full">
                <h2 className="text-white text-xl font-bold w-full text-left">
                  Your ticket
                </h2>
              </Fade>
              {/* Route  */}
              <Fade direction="right" triggerOnce className="w-full">
                <div className="w-full flex flex-col items-start justify-start gap-1 rounded-3xl bg-coolBlack py-4 px-8">
                  <h3 className="text-left text-white text-base font-bold">
                    Route #1
                  </h3>
                  <p className="text-osloGrey text-xs text-left w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </p>
                </div>
              </Fade>
              {/* Variant  */}
              <Fade className="w-full" direction="right" triggerOnce>
                <div className="w-full flex flex-col items-start justify-start gap-1 rounded-3xl bg-coolBlack py-4 px-8">
                  <h3 className="text-left text-white text-base font-bold">
                    Variant #1
                  </h3>
                  <p className="text-osloGrey text-xs text-left w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                  </p>
                </div>
              </Fade>
            </div>
            {/* Ticket number  */}
            <Fade className="w-full" direction="up" triggerOnce>
              <div className="text-osloGrey w-full text-center text-[50px] sm:text-[64px] font-bold">
                643231
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
