"use client";

import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Cards from "./components/reusableComponents/cards";

const cards = [
  { id: 1, type: "Identity Card" },
  { id: 2, type: "Study Room Card" },
];

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window === "undefined" || !window.location.search) {
      return;
    }

    router.replace(window.location.pathname);
  }, [router]);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 2, // Space between cards
        height: "100vh", // Full viewport height
      }}
    >
      {cards.map((card) => (
        <Cards key={card.id} type={card.type} />
      ))}
      {/* @ts-expect-error AMP custom element is not included in React's JSX types. */}
      <amp-ad
        width="100vw"
        height="320"
        type="adsense"
        data-ad-client="ca-pub-2535696604999636"
        data-ad-slot="1634157583"
        data-auto-format="rspv"
        data-full-width=""
      >
        {/* @ts-expect-error AMP requires the non-standard overflow attribute. */}
        <div overflow=""></div>
        {/* @ts-expect-error AMP custom element is not included in React's JSX types. */}
      </amp-ad>
    </Box>
  );
}
