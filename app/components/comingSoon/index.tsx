import { Box, Typography } from "@mui/material";
import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#1b233d",
        color: "white",
        textAlign: "center",
        padding: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          letterSpacing: 2,
          marginBottom: 2,
        }}
      >
        Coming Soon
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 4 }}>
        We are working hard to bring you this feature. Stay tuned!
      </Typography>
      <Box
        sx={{
          width: "100%",
          maxWidth: 400,
          borderRadius: 2,
          backgroundColor: "#2a2e4d",
          padding: 2,
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 20px 0px",
        }}
      >
        <Typography variant="body2" sx={{ textAlign: "center" }}>
          Thank you for your patience!
        </Typography>
      </Box>
    </Box>
  );
};

export default ComingSoon;
