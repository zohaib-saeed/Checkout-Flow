import React, { Fragment, useState } from "react";
import Image from "next/image";
// Headless ui tab
import { Tab } from "@headlessui/react";

import { Fade } from "react-awesome-reveal";

import Container from "../../Commons/Container/Index";
import CheckoutCard from "./CheckoutCard";

const Checkout = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = () => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleSubmit = () => {
    if (validateEmail()) {
      // Submit the form
      console.log("Email submitted:", email);
    }
  };

  return (
    <div className="w-full flex items-center justify-start flex-col relative">
      <div className="w-full max-w-[1350px] flex items-center justify-start flex-col ">
        <div className="w-full  flex items-start justify-start flex-col gap-7 md:gap-9 lg:gap-12  ">
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
            <Tab.Group defaultIndex={1}>
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
                        className={`w-[40px] h-[40px] flex items-center justify-center text-lg xs:text-2xl rounded-full font-bold leading-[0px]  ${
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
                        Selection
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
                <Tab.Panel className="w-full flex flex-col items-center justify-start mt-12 sm:mt-16 ">
                  <p className="text-white">Selection tab</p>
                </Tab.Panel>
                <Tab.Panel className="w-full flex flex-col items-center justify-start mt-12 sm:mt-16">
                  <div className="w-full flex flex-col items-center justify-start gap-8">
                    <div className="w-full flex flex-col items-start justify-start gap-3 sm:gap-8 flex-wrap overflow-x-hidden px-3 sm:px-4 md:px-6 lg:px-8 ">
                      <CheckoutCard />
                      <CheckoutCard />
                    </div>
                    {/* Col 2  */}
                    <div className="w-full lg:max-w-[450px] lg:h-screen lg:min-h-[600px] flex items-center justify-start flex-col bg-balticSea rounded-tl-[24px] xs:rounded-tl-[30px] sm:rounded-tl-[70px] px-6 sm:px-9 lg:px-12 py-7 md:py-9 lg:py-12 lg:absolute right-0  lg:top-0">
                      <div className="w-full max-w-[450px] sm:max-w-none sm:w-[75%] md:w-[50%] lg:w-full flex flex-col items-start justify-start gap-3 sm:gap-4 lg:sticky top-0 right-0 ">
                        <Fade
                          direction="up"
                          triggerOnce
                          delay={0.2}
                          classNamew="w-full"
                        >
                          <h1 className="text-lg sm:text-xl font-bold text-white">
                            Tulpenroute
                          </h1>
                        </Fade>
                        <Fade
                          direction="up"
                          triggerOnce
                          delay={0.3}
                          className="w-full"
                        >
                          <p className="w-full lg:w-[90%] text-osloGrey text-[14px] sm:text-[15px] text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                          </p>
                        </Fade>
                        <Fade
                          direction="up"
                          triggerOnce
                          delay={0.4}
                          className="w-full"
                        >
                          <div>
                            <input
                              type="email"
                              placeholder="name@domain.com"
                              value={email}
                              onChange={handleEmailChange}
                              className="bg-black p-3 sm:p-4 rounded-2xl w-full border-none focus:border-none focus:outline-none text-white text-base placeholder:text-white "
                            />
                            {error && (
                              <p className="text-red font-medium text-sm">
                                {error}
                              </p>
                            )}
                          </div>
                        </Fade>
                        <div className="w-full h-[1px] my-2 rounded-full bg-osloGrey bg-opacity-20"></div>
                        <Fade
                          direction="up"
                          triggerOnce
                          delay={0.5}
                          className="w-full"
                        >
                          <div className="w-full flex items-center justify-between">
                            <h2 className="text-osloGrey font-medium text-base">
                              Total
                            </h2>
                            <p className="text-white font-bold text-base">
                              EUR 4,-
                            </p>
                          </div>
                        </Fade>
                        <Fade
                          direction="up"
                          triggerOnce
                          delay={0.6}
                          className="w-full"
                        >
                          <button
                            onClick={handleSubmit}
                            className=" w-full border-none bg-osloGrey bg-opacity-10 p-3 sm:p-4 text-white font-bold text-base rounded-2xl"
                          >
                            Checkout
                          </button>
                        </Fade>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
