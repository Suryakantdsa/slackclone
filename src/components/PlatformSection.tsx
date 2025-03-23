import React from "react";
import SectionHOC from "./SectionHOC";

const PlatformSection = () => {
  const PlatformProps = {
    bgColor: "#f4efe8",
    color: "#339fd7",
    title: "Customise Slack to work the way that you do",
    subtitle: "Platform",
    listItems: [
      "Choose from over 2,600 apps to help bring all your tools together",
      "Build time-saving automations and integrate your favourite apps",
      "Integrate internal tools, processes and data with ease",
    ],
    learnMore: "Learn more about apps and integrations",
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
      "https://a.slack-edge.com/1da70ee/marketing/img/enterprise/platform/4-illo-platform.IN.jpg",
  };
  return <SectionHOC {...PlatformProps} />;
};

export default PlatformSection;
