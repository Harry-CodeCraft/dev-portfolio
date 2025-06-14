import { Box, Typography, useTheme } from "@mui/material";
import React, { memo } from "react";

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
        &copy; {currentYear} All rights reserved.
      </Typography>
      <Typography
        variant="body2"
        sx={{
          marginTop: "0.5rem",
          fontSize: "0.75rem",
          color: theme.palette.text.secondary,
        }}
      >
        Disclaimer: The information provided on this website is for general
        informational purposes only.
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: "0.75rem",
          color: theme.palette.text.secondary,
        }}
      >
        This site complies with GDPR regulations. By using this site, you
        consent to the use of cookies and data collection as outlined in our
        privacy policy.
      </Typography>
    </Box>
  );
};
Footer.displayName = "Footer";
export default memo(Footer);
