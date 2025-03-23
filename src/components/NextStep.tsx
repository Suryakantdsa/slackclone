import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const NextStep = () => {
  const toolLogo = [
    {
      name: "github",
      logo: "https://avatars.slack-edge.com/2020-11-25/1527503386626_319578f21381f9641cd8_72.png",
    },
    {
      name: "whitesrt",
      logo: "https://a.slack-edge.com/80588/img/apps/default_new_app_icon.png",
    },
    {
      name: "stackoverflow",
      logo: "https://avatars.slack-edge.com/2020-09-22/1373751028310_515e6b11f0a095a58225_72.png",
    },
    {
      name: "jira",
      logo: "https://avatars.slack-edge.com/2018-11-30/493753869479_4b703f4119efe3d7d0ff_72.png",
    },
    {
      name: "amazonQ",
      logo: "https://avatars.slack-edge.com/2025-01-27/8360298294916_4b74ce9149bc8dffb073_72.png",
    },
    {
      name: "pagerduty",
      logo: "https://avatars.slack-edge.com/2021-01-25/1680548373876_08bcd7da61f0761d9dcd_72.png",
    },
    {
      name: "newrelic",
      logo: "https://a.slack-edge.com/80588/img/services/new-relic_72.png",
    },

    {
      name: "azur board",
      logo: "https://avatars.slack-edge.com/2019-07-11/680425406306_ed2e096c273248ab71b5_72.png",
    },
    {
      name: "datadog",
      logo: "https://avatars.slack-edge.com/2020-02-13/953695307206_a67bff8a85fff77da307_72.png",
    },
    {
      name: "circleCi",
      logo: "https://a.slack-edge.com/80588/img/plugins/circleci/service_72.png",
    },
    {
      name: "gitlab",
      logo: "https://avatars.slack-edge.com/2022-05-10/3504409679109_09edd9580fda38ed7976_72.png",
    },
    {
      name: "genkins",
      logo: "https://a.slack-edge.com/80588/img/services/jenkins-ci_72.png",
    },
    {
      name: "now",
      logo: "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-04-01/338840308512_7b2518ce202467308909_72.png",
    },
    {
      name: "man",
      logo: "https://avatars.slack-edge.com/2019-05-30/652285939191_7831939cc30ef7159561_72.png",
    },
    {
      name: "zappier",
      logo: "https://avatars.slack-edge.com/2022-08-02/3888649620612_f864dc1bb794cf7d82b0_72.png",
    },
    {
      name: "zooom",
      logo: "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2017-09-21/245295805989_06e77af1bfb8e3c81d4d_72.png",
    },
  ];
  return (
    <div className="bg-background">
      <div className="container ">
        <div className="flex flex-col w-full justify-center items-center p-2 sm:p-16 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-center">
              2,600+ integrations and counting
            </h1>
            <p className="text-center mt-4">
              Slack connects with all of your favourite tools, such as GitHub,
              Jenkins, Jira, PagerDuty and more.
            </p>
          </div>
          <div className=" text-center flex items-center gap-2 text-secondary-500 text-lg cursor-pointer ">
            <h2 className=" text-sm md:text-lg">
              See all engineering integrations{" "}
            </h2>
            <MoveRight className="w-4 h-4 sm:w-5 sm:h-5 block" />
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-4 md:gap-y-8 my-8">
            {toolLogo.map((logo) => (
              <div
                key={logo.name}
                className="p-1 hover:border  hover:bg-primary-100 cursor-pointer  border-black transition-color rounded-md"
              >
                <Image
                  alt={logo.name}
                  src={logo.logo}
                  width={80}
                  height={80}
                  className="hover:scale-95 transition-colors rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextStep;
