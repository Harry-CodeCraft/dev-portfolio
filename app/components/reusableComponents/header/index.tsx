"use client";

import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import styleConstants from "@/app/theme/styleConstants";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { GoHomeFill } from "react-icons/go";
import { FaUserCircle } from "react-icons/fa";

interface HeaderProps {
  mode: "light" | "dark";
  toggleMode: () => void;
}

const navLinks = [
  { label: "Home", href: "/", icon: <GoHomeFill size={25} /> },
  { label: "Portfolio", href: "/portfolio", icon: <FaUserCircle size={25} /> },
];

function handleNavigation(href: string, router: AppRouterInstance) {
  router.push(href);
}

export default function Header({ mode, toggleMode }: HeaderProps) {
  const [elevated, setElevated] = useState(false);
  const { colorPalette } = styleConstants;
  const router = useRouter();

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
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        color:
          mode === "light"
            ? colorPalette.darkCharcoal
            : elevated
            ? colorPalette.platinumWhite
            : colorPalette.offWhite,
      }}
    >
      <Toolbar
        sx={{ justifyContent: "center", minHeight: { xs: "64px", md: "80px" } }}
      >
        <Box
          sx={{
            backgroundColor: elevated ? "rgb(0, 0, 0, 0.2)" : "transparent",
            boxShadow: elevated ? "rgba(0, 0, 0, 0.1) 0px 4px 12px" : "none",
            border: elevated ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
            transition:
              "background-color 0.3s, box-shadow 0.3s, color 0.3s, border 0.3s",
            backdropFilter: elevated ? "blur(8px)" : "none",
            px: 2,
            py: 1,
            borderRadius: 10,
          }}
        >
          {navLinks.map((link) => (
            <Button
              key={link.label}
              onClick={() => handleNavigation(link.href, router)}
              sx={{
                color: "inherit",
                fontWeight: 600,
                mx: 1,
                textTransform: "none",
                fontSize: "1rem",
              }}
            >
              {link.icon}
            </Button>
          ))}
          <Button onClick={toggleMode} color="inherit">
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
