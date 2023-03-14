import React from "react";

const Container = ({ children, padding }) => {
  return (
    <div className="w-full flex items-center justify-start flex-col   ">
      <div
        className={`w-full max-w-[1350px] flex items-center justify-start flex-col ${
          padding
            ? padding
            : "px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-7 md:py-9 lg:py-12 pb-16 sm:pb-20 md:pb-24 lg:pb-28"
        } `}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
