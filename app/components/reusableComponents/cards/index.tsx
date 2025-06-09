"use client";

import { Box } from "@mui/material";
import HoverDynamicCard from "./hoveDynamicCard";
import IdentityCard from "./identityCards";
import ClashCard from "./clashCard";

const cards = [
  { name: "Hover Dynamic Card", component: <HoverDynamicCard /> },
  { name: "Identity Card", component: <IdentityCard /> },
  { name: "Clash Card", component: <ClashCard /> },
];

export default function Cards({ type }: { type: string }) {
  const selectedCard = cards.find((card) => card.name === type);

  if (selectedCard) {
    return <Box>{selectedCard.component}</Box>;
  }
  return <Box>No card found</Box>;
}
