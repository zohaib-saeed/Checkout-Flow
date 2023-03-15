import React, { useState } from "react";
import CheckoutCard from "./CheckoutCard";
import { Fade } from "react-awesome-reveal";

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
    <div className="w-full flex flex-col items-center justify-start gap-8">
      <div className="w-full flex flex-col items-start justify-start gap-3 sm:gap-8 flex-wrap overflow-x-hidden px-3 sm:px-4 md:px-6 lg:px-8 ">
        <CheckoutCard />
        <CheckoutCard />
      </div>
      {/* Col 2  */}
      <div className="w-full lg:max-w-[450px] lg:h-screen lg:min-h-[600px] flex items-center justify-start flex-col bg-balticSea rounded-tl-[24px] xs:rounded-tl-[30px] sm:rounded-tl-[70px] px-6 sm:px-9 lg:px-12 py-7 md:py-9 lg:py-12 lg:absolute right-0  lg:top-0">
        <div className="w-full max-w-[450px] sm:max-w-none sm:w-[75%] md:w-[50%] lg:w-full flex flex-col items-start justify-start gap-3 sm:gap-4 lg:sticky top-0 right-0 ">
          <Fade direction="up" triggerOnce delay={0.2} classNamew="w-full">
            <h1 className="text-lg sm:text-xl font-bold text-white">
              Tulpenroute
            </h1>
          </Fade>
          <Fade direction="up" triggerOnce delay={0.3} className="w-full">
            <p className="w-full lg:w-[90%] text-osloGrey text-[14px] sm:text-[15px] text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </Fade>
          <Fade direction="up" triggerOnce delay={0.4} className="w-full">
            {/* Email Input  */}
            <div>
              <input
                type="email"
                placeholder="name@domain.com"
                value={email}
                onChange={handleEmailChange}
                className="bg-black p-3 sm:p-4 rounded-2xl w-full border-none focus:border-none focus:outline-none text-white text-base placeholder:text-white "
              />
              {error && <p className="text-red font-medium text-sm">{error}</p>}
            </div>
          </Fade>
          <div className="w-full h-[1px] my-2 rounded-full bg-osloGrey bg-opacity-20"></div>
          <Fade direction="up" triggerOnce delay={0.5} className="w-full">
            {/* Total  */}
            <div className="w-full flex items-center justify-between">
              <h2 className="text-osloGrey font-medium text-base">Total</h2>
              <p className="text-white font-bold text-base">EUR 4,-</p>
            </div>
          </Fade>
          {/* Checkout button  */}
          <Fade direction="up" triggerOnce delay={0.6} className="w-full">
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
  );
};

export default Checkout;
