import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  publicRuntimeConfig: {
    siteName: "HarryCodeCraft",
    siteUrl: "https://www.harrycodecraft.com",
    authorName: "Harsh Singh",
    authorUrl: "https://www.harrycodecraft.com",
    enableComingSoon: process.env.ENABLE_COMING_SOON === "true",
  },
};

export default nextConfig;
