// components/OurClients.js
import React from "react";

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
  ];

  return (
    <div className="container my-10">
      {/* <h2>Our Clients</h2> */}
      <div className="flex w-full justify-center md:justify-between items-center flex-wrap gap-4 ">
        {clients.map((client, index) => (
          <div key={index} className="">
            <img src={client.logo} alt={client.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurClients;
