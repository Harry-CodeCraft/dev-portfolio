"use client";

import { Box, IconButton, useTheme } from "@mui/material";
import { memo } from "react";

import { socialMediaIconArray } from "../icons";

const SocialMediaIcons = memo(() => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const icons = socialMediaIconArray;

  return (
    <Box
      sx={{
        display: { xs: "flex", md: "block" },
        justifyContent: { xs: "center" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: isDark ? "#1d2433" : "#f3f5f8",
          borderRadius: "48px",
          boxShadow: "0 2px 16px 0 rgba(0,0,0,0.12)",
          border: isDark
            ? "2px solid rgba(255,255,255,0.08)"
            : "2px solid rgba(0,0,0,0.06)",
          backdropFilter: "blur(2px)",
          width: "286px",
          py: 1.1,
        }}
      >
        {icons.map(({ icon, href, label }) => (
          <IconButton
            key={label}
            component="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            sx={{
              border: isDark
                ? "2px solid rgba(255,255,255,0.2)"
                : "2px solid rgba(0,0,0,0.12)",
              color: isDark
                ? theme.palette.primary.main
                : theme.palette.primary.light,
              bgcolor: "transparent",
              borderRadius: "50%",
              width: 40,
              height: 40,
              transition: "all 0.2s",
              mx: 1,
              "&:hover": {
                bgcolor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.04)",
                color: isDark
                  ? theme.palette.primary.light
                  : theme.palette.primary.main,
                borderColor: isDark
                  ? theme.palette.primary.light
                  : theme.palette.primary.main,
                transform: "scale(1.08)",
              },
              "& .MuiSvgIcon-root": {
                width: "1.5rem",
                height: "1.5rem",
              },
            }}
          >
            {icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
});

SocialMediaIcons.displayName = "SocialMediaIcons";

export default SocialMediaIcons;
