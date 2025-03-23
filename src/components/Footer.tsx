import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-primary-600 text-white">
        <div className="container border-none">
          <div className="flex justify-center flex-col items-center py-20 gap-6 px-2">
            <h1 className="font-bold text-4xl md:text-5xl text-center">
              Choose a better way to work
            </h1>
            <div className="flex gap-4 flex-col sm:flex-row w-full justify-center it">
              <button className="rounded-md px-6 py-4 bg-white z-30  text-primary-600 font-semibold w-full md:w-auto">
                SLACK for android
              </button>
              <button className="px-10 py-4 border z-30  border-white rounded-md w-full md:w-auto">
                Contact sales
              </button>
            </div>
          </div>
        </div>
        {/* <div className="relative  w-full bg-white z-20 border-none">
          <div
            className="absolute -top-4 left-0 w-full h-44 bg-primary-600"
            style={{
              borderBottomLeftRadius: "50% 100%",
              borderBottomRightRadius: "50% 100%",
            }}
          ></div>
        </div> */}
      </div>
    </>
  );
};

export default Footer;
