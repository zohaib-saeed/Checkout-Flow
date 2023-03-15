import React, { useState, Fragment } from "react";
import Image from "next/image";
// Headless ui tab
import { Tab } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import { Fade } from "react-awesome-reveal";
import Checkout from "@/components/CheckoutFlow/Checkout/Index";

const SelectDay = () => {
  return (
    <div className="w-full flex items-center justify-start flex-col relative pb-16 sm:pb-20 md:pb-24 lg:pb-28">
      <div className="w-full max-w-[1350px] flex items-center justify-start flex-col ">
        <div className="w-full flex items-start justify-start flex-col gap-7 md:gap-9 lg:gap-12 ">
          {/* Logo  */}
          <div className="w-full flex items-center justify-start px-3 sm:px-4 md:px-6 lg:px-8 pt-4 sm:pt-7 md:pt-9 lg:pt-12">
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
          {/* Tabs  */}
          <div className="w-full flex items-start justify-start flex-col">
            <Tab.Group>
              <Tab.List className="w-full flex items-center justify-start gap-10 xs:gap-12 sm:gap-16 px-3 sm:px-4 md:px-6 lg:px-8 ">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <div
                      className={` flex items-center justify-start gap-2 xs:gap-[10px] cursor-pointer ${
                        selected
                          ? "text-black text-base border-[0px] outline-[0px]"
                          : " text-osloGrey text-md border-[0px] outline-[0px]"
                      }`}
                    >
                      <span
                        className={`w-[30px] xs:w-[40px] h-[30px] xs:h-[40px] flex items-center justify-center text-lg xs:text-2xl rounded-full font-bold leading-[0px]  ${
                          selected
                            ? "bg-lightGrey   text-blackn  "
                            : "text-osloGrey bg-balticSea"
                        }`}
                      >
                        1
                      </span>{" "}
                      <p
                        className={`text-lg xs:text-xl font-bold ${
                          selected ? "text-white" : "text-osloGrey"
                        }`}
                      >
                        Moment
                      </p>
                    </div>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <div
                      className={`flex items-center justify-start gap-2 xs:gap-[10px] cursor-pointer ${
                        selected
                          ? "text-black text-base border-[0px] outline-[0px]"
                          : " text-osloGrey text-md border-[0px] outline-[0px]"
                      }`}
                    >
                      <span
                        className={`w-[30px] xs:w-[40px] h-[30px] xs:h-[40px] flex items-center justify-center text-lg xs:text-2xl rounded-full font-bold leading-[0px] ${
                          selected
                            ? "bg-lightGrey   text-blackn "
                            : "text-osloGrey bg-balticSea"
                        }`}
                      >
                        2
                      </span>{" "}
                      <p
                        className={`text-lg xs:text-xl font-bold ${
                          selected ? "text-white" : "text-osloGrey"
                        }`}
                      >
                        Checkout
                      </p>
                    </div>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels className="w-full">
                {/* Panel 1 */}
                <Tab.Panel className="w-full flex flex-col items-start justify-start mt-12 sm:mt-16">
                  <div className="w-full lg:w-[75%] grid grid-cols-2 xs:flex items-center justify-start flex-wrap gap-3 xs:gap-4 sm:gap-6 overflow-x-hidden px-3 sm:px-4 md:px-6 lg:px-8">
                    {[0, 1, 2, 4, 5, 6, 7, 8, 9, 1, 2].map((item, index) => (
                      <Fade key={index} direction="right" triggerOnce>
                        <div className="w-full xs:w-[260px] sm:w-[290px] flex items-center justify-between gap-[6px] xs:gap-3 bg-balticSea p-2 py-4 xs:p-5 sm:p-7 rounded-xl cursor-pointer">
                          <p className="text-white text-sm xs:text-lg sm:text-xl font-bold text-left">
                            Maandag, 14 april
                          </p>
                          <ChevronRightIcon className="w-[15px] xs:w-[20px] sm:w-[24px] h-[15px] xs:h-[20px] sm:h-[24px] text-white" />
                        </div>
                      </Fade>
                    ))}
                  </div>
                </Tab.Panel>
                {/* Panel 2  */}
                <Tab.Panel className="w-full flex flex-col items-start justify-start mt-12 sm:mt-16">
                  <Checkout />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectDay;
