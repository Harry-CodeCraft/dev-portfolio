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
    </Box>
  );
}
