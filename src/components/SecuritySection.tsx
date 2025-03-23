import React from "react";
import SectionHOC from "./SectionHOC";

const SecuritySection = () => {
  const securityProps = {
    bgColor: "white",
    color: "#9d174d",
    title: "Ensure company-wide safety and compliance",
    subtitle: "Security",
    listItems: [
      "Consider compliance needs met, including requirements like FINRA, HIPAA and FedRAMP",
      "Protect sensitive information and resources with native data-loss prevention",
      "Take control of data using your own encryption keys with Slack Enterprise Key Management",
    ],
    learnMore: "Learn more about security",
    testimonial: {
      quote:
        "‘With the introduction of Slack Enterprise Key Management as an added security feature, we immediately saw its value in giving us total control of our data and the assurance that we’re protected in the event of a security threat in our supply chain.’",
      logo: "https://a.slack-edge.com/4b8d0/marketing/img/enterprise/new/logos/crowdstrike@2x.png",
      author: "Colin Black",
      role: "Chief Operating Officer",
      logoWidth: 180,
      logoHeight: 30,
    },
    imageUrl:
      "https://a.slack-edge.com/379ae/marketing/img/enterprise/new/sections/2-security/security.IN.jpg",
  };
  return <SectionHOC {...securityProps} />;
};

export default SecuritySection;
