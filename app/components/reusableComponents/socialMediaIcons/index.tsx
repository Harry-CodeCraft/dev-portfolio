"use client";

import { Box, IconButton } from "@mui/material";
import { socialMediaIconArray } from "../icons";
import { memo } from "react";

const SocialMediaIcons = memo(() => {
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
          bgcolor: "rgba(36, 44, 62, 0.7)",
          borderRadius: "48px",
          boxShadow: "0 2px 16px 0 rgba(0,0,0,0.12)",
          border: "2px solid rgba(255,255,255,0.08)",
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
              border: "2px solid rgba(255,255,255,0.25)",
              color: "#e7e8e9",
              bgcolor: "transparent",
              borderRadius: "50%",
              width: 40,
              height: 40,
              transition: "all 0.2s",
              mx: 1,
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.08)",
                color: "#fff",
                borderColor: "#fff",
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
