import React from "react";

interface Brand {
  name?: string;
  logo?: string;
}

interface BrandHOCProps {
  brands: Brand[];
}

const BrandHOC: React.FC<BrandHOCProps> = ({ brands }) => {
  return (
    <div className="container my-10">
      <div className="flex w-full justify-center md:justify-between items-center flex-wrap gap-4">
        {brands.map((client, index) => (
          <div key={index}>
            <img
              src={client.logo}
              alt={client.name}
              className="w-auto h-auto"
            />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandHOC;
