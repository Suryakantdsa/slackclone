// import { CircleCheck, MoveRight } from "lucide-react";
// import Image from "next/image";
// import React from "react";

// const ProductiveSection = () => {
//   return (
//     <div className="bg-[#f4efe8] py-16">
//       <div className="container ">
//         <div className="flex flex-col space-y-6 px-2 md:px-0">
//           <div className="uppercase text-gray-500">Productivity at scale</div>
//           <div className="flex justify-between w-full flex-col md:flex-row ">
//             <div className="md:w-[40%] ">
//               <h1 className="font-bold text-3xl tracking-tight leading-9 ">
//                 Meet the needs of your organisation with powerful productivity
//                 tools
//               </h1>
//               <ul className="flex gap-4 flex-col mt-6 w-full">
//                 <li className="flex  gap-3 ">
//                   <CircleCheck
//                     fill="#642067"
//                     className="w-10 h-10"
//                     color="white"
//                   />{" "}
//                   <span className="tracking-wider">
//                     Automate everyday tasks and get more time back for what’s
//                     most important
//                   </span>
//                 </li>
//                 <li className="flex  gap-3">
//                   <CircleCheck
//                     fill="#642067"
//                     className="w-10 h-10"
//                     color="white"
//                   />
//                   <span className="tracking-wider">
//                     Get a glimpse of your entire org with ease using{" "}
//                     <span className="text-secondary-500">Slack Atlas</span>, our
//                     built-in team directory tool
//                   </span>
//                 </li>
//                 <li className="flex  gap-3">
//                   <CircleCheck
//                     fill="#642067"
//                     className="w-10 h-10"
//                     color="white"
//                   />
//                   <span className="tracking-wider">
//                     Visualise team productivity and measure tech stack adoption
//                     with advanced analytics
//                   </span>
//                 </li>
//               </ul>
//               <div className="mt-6 flex items-center gap-2 text-secondary-500 text-lg cursor-pointer">
//                 <h2>Learn more about Slack at scale</h2>
//                 <MoveRight className="w-4 h-4 sm:w-5 sm:h-5" />
//               </div>
//               <div className="sm:flex flex-col gap-4 mt-4 hidden ">
//                 <p className="italic text-gray-500">
//                   'Slack has been the hammer that has helped us tear down the
//                   walls of silos. It has enabled us to position Slack as the
//                   operating system of collaboration across 194 countries and 171
//                   offices, pulling us together like nothing else has.’
//                 </p>
//                 <Image
//                   src={
//                     "https://a.slack-edge.com/4b8d0/marketing/img/enterprise/new/logos/fox@2x.png"
//                   }
//                   alt="fox_logo"
//                   width={50}
//                   height={30}
//                 />
//                 <p className="-mt-3">
//                   <span className="font-bold">Jeff Dow, </span>
//                   Executive Vice President, Media and Broadcast Operations
//                 </p>
//               </div>
//             </div>
//             <div className="">
//               <Image
//                 alt="scale"
//                 className="w-full"
//                 src={
//                   "https://a.slack-edge.com/379ae/marketing/img/enterprise/new/sections/1-scale/scale.IN.jpg"
//                 }
//                 width={460}
//                 height={400}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductiveSection;

import SectionHOC from "./SectionHOC";

const ProductiveSection = () => {
  const productiveProps = {
    bgColor: "#f4efe8",
    color: "#642067",
    title:
      "Meet the needs of your organisation with powerful productivity tools",
    subtitle: "Productivity at scale",
    listItems: [
      "Automate everyday tasks and get more time back for what’s most important",
      "Get a glimpse of your entire org with ease using Slack Atlas, our built-in team directory tool",
      "Visualise team productivity and measure tech stack adoption with advanced analytics",
    ],
    learnMore: "Learn more about Slack at scale",
    testimonial: {
      quote:
        "'Slack has been the hammer that has helped us tear down the walls of silos. It has enabled us to position Slack as the operating system of collaboration across 194 countries and 171 offices, pulling us together like nothing else has.’",
      logo: "https://a.slack-edge.com/4b8d0/marketing/img/enterprise/new/logos/fox@2x.png",
      author: "Jeff Dow",
      role: "Executive Vice President, Media and Broadcast Operations",
      logoWidth: 50,
      logoHeight: 30,
    },
    imageUrl:
      "https://a.slack-edge.com/379ae/marketing/img/enterprise/new/sections/1-scale/scale.IN.jpg",
  };

  return <SectionHOC {...productiveProps} />;
};

export default ProductiveSection;
