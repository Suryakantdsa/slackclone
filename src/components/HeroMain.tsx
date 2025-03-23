import Image from "next/image";
import React from "react";

const HeroMain = () => {
  return (
    <div className="container mt-10 font-inter">
      <div className="flex justify-between  flex-col md:flex-row md:px-10 px-2">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-3xl tracking-normal  font-extrabold text-gray-900 sm:text-5xl md:text-5xl w-[70%]">
            <span className="block xl:inline  ">
              Slack is where the future works
            </span>{" "}
          </h1>
          <p className="mt-3 text-base text-gray-400  sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
            Transform the way you work with one place for everyone and
            everything you need to get stuff done.
          </p>
          <div className="flex w-full justify-start items-center gap-4 mt-5">
            <button className=" bg-primary-500 text-white px-4 py-2 md:px-8 md:py-4  text-sm ">
              TRY FOR FREE
            </button>
            <div className=" text-primary-500  p-1  text-sm  flex border items-center gap-2 justify-start bg-secondary-400">
              <span className="h-full p-3 bg-white">
                <Image
                  src={"/google_logo.png"}
                  width={20}
                  height={20}
                  alt="google_logo"
                />
              </span>
              <span className="text-gray-300 pr-2">SIGN UP WITH GOOGLE</span>
            </div>
          </div>
        </div>

        <div>
          <video
            height="544"
            width="500"
            className=" rounded-lg mt-10 md:mt-0"
            title="Team discussing work in the Slack app"
            poster="https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/static/hero@2x.IN.jpg"
            autoPlay // Autoplay the video
            loop // Loop the video infinitely
            muted // Mute the video (required for autoplay in most browsers)
            playsInline // Ensures the video plays inline on mobile devices
          >
            <source
              src="https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/animation/hero@2x.IN.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
