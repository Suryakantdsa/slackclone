import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "a.slack-edge.com",
      "avatars.slack-edge.com",
      "slack-files2.s3-us-west-2.amazonaws.com",
    ],
  },
};

export default nextConfig;
