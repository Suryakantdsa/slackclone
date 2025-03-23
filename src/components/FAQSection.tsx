"use client";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const faqs: FAQ[] = [
    {
      question: "How do I add a bot to Slack?",
      answer:
        "To add a bot to Slack, go to the Slack App Directory, search for the bot you want, and click 'Add to Slack'. Follow the prompts to authorize and configure the bot.",
    },
    {
      question: "How do I create a new channel?",
      answer:
        "To create a new channel, click the '+' button next to 'Channels' in the sidebar, choose 'Create a channel', and follow the steps to set it up.",
    },
    {
      question: "Can I use Slack for free?",
      answer:
        "Yes, Slack offers a free plan with limited features. You can upgrade to a paid plan for access to more advanced features.",
    },
    {
      question: "How do I add a bot to slack ?",
      answer:
        "Adding a bot to Slack is a smart way to boost team productivity. Bots can be added by going to the Slack Marketplace and installing them to your workspace (you may need an admin to do this). Or, you can create your own custom bots. Here’s more about what bots can do and how to use them.",
    },
    {
      question: "Where is slack stored the data?",
      answer:
        "Slack allows global teams to choose the region where certain types of data at rest are stored. Currently Slack offers data residency in six regions: Australia, Canada, France, Germany, Japan and the UK. Learn more about how data residency works at Slack.",
    },
    {
      question: "is slack is secured ?",
      answer: `Yes. You can securely discuss confidential information in Slack. Slack offers multiple ways to ensure that your information, conversations and files stay safe. It delivers enterprise-grade security at every layer, adhering to multiple compliance certifications, including SOC 2, SOC 3, ISO/IEC 27001 and more. Slack is GDPR-compliant and can be configured for HIPAA and FINRA compliance. It is FedRAMP Moderate authorise.
        `,
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-primary-50 py-16">
      <div className="container">
        <h1 className="text-center text-3xl font-bold">
          Frequently asked questions
        </h1>
        <div className="mt-16 px-2 flex justify-center w-full gap-y-4 md:gap-y-8 flex-col items-center">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="flex w-full sm:w-[50%] justify-between items-start border-b pb-4"
            >
              <div className="flex flex-col gap-2 w-full">
                <button
                  className="font-semibold text-left flex justify-between items-center w-full"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
