"use client";

import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Cards from "./components/reusableComponents/cards";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

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

  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100dvh",
        height: { xs: "auto", sm: "100dvh" },
        overflow: { xs: "visible", sm: "hidden" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          minHeight: {
            xs: "calc(100dvh - 160px)",
            sm: "calc(100dvh - 260px)",
          },
          height: { xs: "auto", sm: "calc(100dvh - 260px)" },
          overflowY: { xs: "visible", sm: "hidden" },
          p: 2,
        }}
      >
        {cards.map((card) => (
          <Cards key={card.id} type={card.type} />
        ))}
      </Box>
      <Box
        sx={{
          width: "100%",
          height: 100,
          minHeight: 100,
          overflow: "hidden",
          bgcolor: "background.paper",
        }}
      >
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "100px" }}
          data-ad-client="ca-pub-2535696604999636"
          data-ad-slot="1634157583"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </Box>
    </Box>
  );
}
