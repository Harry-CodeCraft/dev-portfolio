"use client";

import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Cards from "./components/reusableComponents/cards";

const cards = [{ id: 2, type: "Identity Card" }];

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    // Clear query parameters from the URL
    const clearQueryParams = () => {
      const urlWithoutQuery = window.location.pathname; // Get the URL without query parameters
      router.replace(urlWithoutQuery); // Replace the current URL with the cleaned URL
    };

    clearQueryParams();
  }, []);
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
