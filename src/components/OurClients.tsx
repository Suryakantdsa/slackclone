import BrandHOC from "./BrandHOC";

const OurClients = () => {
  const clients = [
    {
      name: "New York Times",
      logo: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nyt-small.png",
    },

    {
      name: "NASA",
      logo: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-nasa-small.png",
    },
    {
      name: "Uber",
      logo: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-uber-small.png",
    },
    {
      name: "Target",
      logo: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-target-small.png",
    },
    {
      name: "Airbnb",
      logo: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-airbnb-small.png",
    },
    {
      name: "Etsy",
      logo: "https://a.slack-edge.com/a4c4a15/marketing/img/homepage/true-prospects/revamp-exp/logos/logo-etsy-small.png",
    },
    {
      name: "vodafone",
      logo: "https://slack.com/marketing/img/logos/company/_color/vodafone-logo.png",
    },
  ];

  return <BrandHOC brands={clients} />;
};

export default OurClients;
