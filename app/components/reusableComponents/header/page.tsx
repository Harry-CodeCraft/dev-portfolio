"use client";

import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Button, Box, IconButton } from "@mui/material";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import styleConstants from "@/app/theme/styleConstants";

interface HeaderProps {
  mode: "light" | "dark";
  toggleMode: () => void;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header({ mode, toggleMode }: HeaderProps) {
  const [elevated, setElevated] = useState(false);
  const { colorPalette } = styleConstants;

  useEffect(() => {
    const handleScroll = () => {
      setElevated(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={elevated ? 4 : 0}
      sx={{
        backgroundColor: elevated ? "rgb(0 23 31 / 80%)" : "transparent",
        color:
          mode === "light"
            ? colorPalette.darkCharcoal
            : elevated
            ? colorPalette.platinumWhite
            : colorPalette.offWhite,
        boxShadow: elevated ? undefined : "none",
        transition: "background-color 0.3s, box-shadow 0.3s, color 0.3s",
        backdropFilter: elevated ? "blur(8px)" : "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "flex-end", minHeight: 64 }}>
        <Box>
          {navLinks.map((link) => (
            <Button
              key={link.label}
              href={link.href}
              sx={{
                color: "inherit",
                fontWeight: 600,
                mx: 1,
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
        <IconButton onClick={toggleMode} color="inherit">
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
