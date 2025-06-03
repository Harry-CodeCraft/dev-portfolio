"use client";

import { Box } from "@mui/material";
import Cards from "./components/reusableComponents/cards";

const cards = [
  { id: 1, type: "Hover Dynamic Card" },
  { id: 2, type: "Identity Card" },
  { id: 3, type: "Hover Dynamic Card" },
  // Add more cards as needed
];

export default function Home() {
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
