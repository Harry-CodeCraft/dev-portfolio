"use client";

import { Box, IconButton } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { memo } from "react";

export const socialMediaIconArray = [
  {
    icon: <MailOutlineIcon fontSize="large" />,
    href: "mailto:harsh10352@gmail.com",
    label: "Email",
  },
  {
    icon: <LinkedInIcon fontSize="large" />,
    href: "https://www.linkedin.com/in/harsh-singh10352/",
    label: "LinkedIn",
  },
  {
    icon: <GitHubIcon fontSize="large" />,
    href: "https://github.com/Harry-CodeCraft",
    label: "GitHub",
  },
  {
    icon: <FacebookIcon fontSize="large" />,
    href: "https://facebook.com/yourprofile",
    label: "Facebook",
  },
  {
    icon: <InstagramIcon fontSize="large" />,
    href: "https://instagram.com/rajput.harshh",
    label: "Instagram",
  },
];

const SocialMediaIcons = () => {
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
        }}
      >
        {socialMediaIconArray.map(({ icon, href, label }) => (
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
        ))}
      </Box>
    </Box>
  );
};

export default memo(SocialMediaIcons);
