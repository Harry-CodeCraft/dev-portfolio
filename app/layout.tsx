import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { StyledRoot } from "./theme/styledRoot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HarryCodeCraft | Harsh Singh | Full Stack Web Developer & Engineer",
  description:
    "Portfolio of Harsh Singh, a full stack web developer and engineer with experience in building scalable web applications, cloud systems, and modern digital solutions.",
  authors: [
    {
      name: "Harsh Singh",
      url: "https://www.harrycodecraft.com",
    },
  ],
  keywords: [
    "Harsh Singh",
    "Full Stack Web Developer",
    "Software Engineer",
    "Web Development Portfolio",
    "Developer Website",
    "Tech Enthusiast",
    "Dev Content Creator",
    "Coding Portfolio",
    "Engineer",
    "HarryCodeCraft",
  ],
  openGraph: {
    title: "HarryCodeCraft | Harsh Singh | Full Stack Web Developer & Engineer",
    description:
      "Explore the work and projects of Harsh Singh — a passionate web developer, engineer, and dev content creator.",
    url: "https://www.harrycodecraft.com/",
    siteName: "HarryCodeCraft",
    images: [
      {
        url: "https://www.harrycodecraft.com/images/favio.jpeg",
        width: 1200,
        height: 630,
        alt: "HarryCodeCraft Open Graph Image",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <StyledRoot>{children}</StyledRoot>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
