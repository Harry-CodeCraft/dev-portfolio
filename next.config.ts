import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "i.vimeocdn.com",
      "www.creativefabrica.com",
      "image.winudf.com",
      "www.leadsquared.com",
    ], // Add all the hostnames from your image URLs
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
  publicRuntimeConfig: {
    siteName: "HarryCodeCraft",
    siteUrl: "https://www.harrycodecraft.com",
    authorName: "Harsh Singh",
    authorUrl: "https://www.harrycodecraft.com",
    enableComingSoon: process.env.ENABLE_COMING_SOON === "true",
    adsenseUrl: process.env.NEXT_PUBLIC_ADSENSE_URL || "",
    emailJs: {
      publicKey: process.env.EMAILJS_PUBLIC_KEY || "",
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
      userId: process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "",
    },
    profilePicturelinkedIn: process.env.LINKEDIN_PROFILE_PIC,
  },
};

export default nextConfig;
