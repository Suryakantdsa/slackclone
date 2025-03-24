import BrandHOC from "./BrandHOC";

const SecurityClients = () => {
  const clients = [
    {
      name: "Finra",
      logo: "https://a.slack-edge.com/937c76a/marketing/img/logos/security/logo-cert-finra@2x.png",
    },

    {
      name: "hipaa",
      logo: "https://a.slack-edge.com/937c76a/marketing/img/logos/security/logo_hipaa@2x.png",
    },
    {
      name: "fedramp",
      logo: "https://a.slack-edge.com/937c76a/marketing/img/logos/security/logo-Fedramp@2x.png",
    },
    {
      name: "gddra",
      logo: "https://a.slack-edge.com/937c76a/marketing/img/logos/security/logo-gdpr@2x.png",
    },
    {
      name: "aicpa",
      logo: "https://a.slack-edge.com/937c76a/marketing/img/logos/security/logo-aicpa-soc@2x.png",
    },
    {
      name: "2778209",
      logo: "https://a.slack-edge.com/937c76a/marketing/img/logos/security/logo-iso-27001@2x.png",
    },
  ];

  return (
    <div className="container py-24">
      <div className="flex w-full justify-center md:justify-between items-center flex-wrap gap-4 px-2 md:px-12">
        {clients.map((client, index) => (
          <div key={index}>
            <img src={client.logo} alt={client.name} className="w-auto h-16" />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecurityClients;
