import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        pathname: "**", // Match any path
      },
      {
        protocol: "https",
        hostname: "i.vimeocdn.com",
        pathname: "**", // Match any path
      },
      {
        protocol: "https",
        hostname: "www.creativefabrica.com",
        pathname: "**", // Match any path
      },
      {
        protocol: "https",
        hostname: "image.winudf.com",
        pathname: "**", // Match any path
      },
      {
        protocol: "https",
        hostname: "www.leadsquared.com",
        pathname: "**", // Match any path
      },
    ],
  },
};

export default nextConfig;
