import React, { Fragment } from "react";
import Image from "next/image";
// Headless ui tab
import { Tab } from "@headlessui/react";

import Container from "../../Commons/Container/Index";
import RouteCard from "./RouteCard";

const SelectRoute = () => {
  return (
    <Container>
      <div className="w-full flex items-start justify-start flex-col gap-7 md:gap-9 lg:gap-12">
        {/* Logo  */}
        <div className="w-[120px] h-[108px] flex items-center justify-center relative">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            fill
            priority
            className="object-contain"
          />
        </div>
        {/* Tabs  */}
        <div className="w-full flex items-start justify-start flex-col">
          <Tab.Group>
            <Tab.List className="w-full flex items-center justify-start gap-10 xs:gap-12 sm:gap-16">
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
                      Routes
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
            <Tab.Panels>
              <Tab.Panel className="w-full flex flex-col items-center justify-start mt-12 sm:mt-16">
                <div className="w-full flex items-center justify-start gap-3 sm:gap-8 flex-wrap overflow-x-hidden">
                  <RouteCard />
                  <RouteCard />
                  <RouteCard />
                </div>
              </Tab.Panel>
              {/* <Tab.Panel className="text-white">Content 2</Tab.Panel> */}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </Container>
  );
};

export default SelectRoute;
