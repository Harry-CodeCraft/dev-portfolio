import { Box, Typography, useTheme } from "@mui/material";
import React, { memo } from "react";

import content from "@/app/content/siteContent";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        textAlign: "center",
        fontSize: "0.875rem",
        padding: "1rem",
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        mb: { xs: 6 },
      }}
    >
      <Typography variant="body2">
        &copy; {currentYear} {content.footer.copyright}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          marginTop: "0.5rem",
          fontSize: "0.75rem",
          color: theme.palette.text.secondary,
        }}
      >
        {content.footer.disclaimer}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: "0.75rem",
          color: theme.palette.text.secondary,
        }}
      >
        {content.footer.gdpr}
      </Typography>
    </Box>
  );
};
Footer.displayName = "Footer";
export default memo(Footer);
