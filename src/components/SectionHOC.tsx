import { CircleCheck, MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
interface ProbsI {
  bgColor?: string;
  color?: string;
  title?: string;
  subtitle?: string;
  listItems?: string[];
  learnMore?: string;
  testimonial?: {
    quote?: string;
    logo: string;
    author?: string;
    role?: string;
    logoWidth?: number;
    logoHeight?: number;
  };
  imageUrl?: string;
}

const SectionHOC = ({
  bgColor,
  color,
  title,
  subtitle,
  listItems,
  learnMore,
  testimonial,
  imageUrl,
}: ProbsI) => {
  return (
    <div className={`bg-[${bgColor}] py-16`}>
      <div className="container ">
        <div className="flex flex-col space-y-6 px-2 md:px-0">
          <div className="uppercase text-gray-500">{subtitle}</div>
          <div className="flex justify-between w-full flex-col md:flex-row ">
            <div className="md:w-[40%] ">
              <h1 className="font-bold text-3xl tracking-tight leading-9 ">
                {title}
              </h1>
              <div className="flex gap-4 flex-col mt-6 w-full">
                {listItems?.map((item) => (
                  <div key={item} className="flex gap-2">
                    <CircleCheck
                      fill={color}
                      className="w-6 h-6"
                      color="white"
                    />{" "}
                    <span className="tracking-wider w-[90%]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-2 text-secondary-500 text-lg cursor-pointer">
                <h2>{learnMore}</h2>
                <MoveRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="sm:flex flex-col gap-4 mt-4 hidden ">
                <p className="italic text-gray-500">{testimonial?.quote}</p>
                <Image
                  src={testimonial?.logo!}
                  alt={testimonial?.author!}
                  width={testimonial?.logoWidth}
                  height={testimonial?.logoHeight}
                />
                <p className="-mt-3">
                  <span className="font-bold">{testimonial?.author}, </span>
                  {testimonial?.role}
                </p>
              </div>
            </div>
            <div className="">
              <Image
                alt="scale"
                className="w-full"
                src={imageUrl!}
                width={460}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionHOC;
