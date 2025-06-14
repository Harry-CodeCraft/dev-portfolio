import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://**/**")],
  },
  publicRuntimeConfig: {
    siteName: "HarryCodeCraft",
    siteUrl: "https://www.harrycodecraft.com",
    authorName: "Harsh Singh",
    authorUrl: "https://www.harrycodecraft.com",
    enableComingSoon: process.env.ENABLE_COMING_SOON === "true",
    emailJs: {
      publicKey: process.env.EMAILJS_PUBLIC_KEY || "",
      serviceId: process.env.EMAILJS_SERVICE_ID || "",
      templateId: process.env.EMAILJS_TEMPLATE_ID || "",
    },
  },
};

export default nextConfig;
