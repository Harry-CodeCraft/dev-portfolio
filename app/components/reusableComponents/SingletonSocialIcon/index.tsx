"use client";

import { Box, IconButton, Typography } from "@mui/material";
import { useEffect, useState, memo } from "react";
import styleConstants from "@/app/theme/styleConstants";
import { ISocialMediaIcon, socialMediaIconArray } from "../icons";

const SingletonSocialIcon = memo(({ icons }: { icons: string }) => {
  const { fontSizes, colorPalette } = styleConstants;
  const [iconsArrayCopy, setIconsArrayCopy] = useState<ISocialMediaIcon[]>([]);

  useEffect(() => {
    if (icons !== "all") {
      const filteredIcons = socialMediaIconArray.filter((icon) =>
        icons.includes(icon.label)
      );
      setIconsArrayCopy(filteredIcons); // Add filtered icons
    }
  }, [icons]);
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
          width: "326px",
          py: 1.1,
          mt: 1,
        }}
      >
        {iconsArrayCopy.map(({ icon, label }) => (
          <span key={label} style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              component="a"
              href="https://www.instagram.com/harrycodecraft/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              sx={{
                border: "2px solid rgba(255,255,255,0.25)",
                color: "#e7e8e9",
                bgcolor: "transparent",
                borderRadius: "50%",
                width: 48,
                height: 48,
                transition: "all 0.2s",
                mx: 1,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  borderColor: "#fff",
                  transform: "scale(1.08)",
                },
              }}
            >
              {icon}
            </IconButton>
            {iconsArrayCopy.length === 1 && (
              <span style={{ textAlign: "left" }}>
                <span>@HarryCodeCraft</span>
                <br />
                <Typography
                  style={{
                    fontSize: fontSizes.tiny,
                    lineHeight: 1,
                    color: colorPalette.platinumWhite80,
                  }}
                >
                  This is my professional Instagram account, where I share daily
                  coding updates, <br />
                  tech news, and developer tips.
                </Typography>
              </span>
            )}
          </span>
        ))}
      </Box>
    </Box>
  );
});

// Set the display name for the memoized component
SingletonSocialIcon.displayName = "SingletonSocialIcon";

export default SingletonSocialIcon;
