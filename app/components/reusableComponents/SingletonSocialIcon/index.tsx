"use client";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useEffect, useState, memo } from "react";

import { ISocialMediaIcon, socialMediaIconArray } from "../icons";
import styleConstants from "@/app/theme/styleConstants";

const SingletonSocialIcon = memo(({ icons }: { icons: string }) => {
  const { fontSizes, colorPalette } = styleConstants;
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
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
          bgcolor: "#242c3e",
          borderRadius: "48px",
          boxShadow: "0 2px 16px 0 rgba(0,0,0,0.12)",
          border: "2px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(2px)",
          width: "286px",
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
            {iconsArrayCopy.length === 1 && (
              <span style={{ textAlign: "left" }}>
                <span style={{ color: colorPalette.offWhite }}>
                  @HarryCodeCraft
                </span>
                <br />
                <Typography
                  style={{
                    fontSize: fontSizes.xtiny,
                    lineHeight: 1,
                    color: isDark
                      ? theme.palette.text.secondary
                      : colorPalette.platinumWhite80,
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem",
                  }}
                >
                  This is my professional Instagram account, where I share daily
                  coding updates, tech news, and developer tips.
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
