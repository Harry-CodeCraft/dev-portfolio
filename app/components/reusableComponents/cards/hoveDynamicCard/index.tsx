import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const HoverDynamicCard = () => {
  const [hover, setHover] = React.useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        width: 220,
        height: 320,
        bgcolor: "mediumturquoise",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 25,
        fontWeight: "bold",
        borderRadius: 2,
        cursor: "pointer",
        overflow: "hidden",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Before pseudo-element */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: hover ? "100%" : "20%",
          height: hover ? "100%" : "20%",
          bgcolor: "lightblue",
          borderRadius: hover ? 2 : "0 15px 0 100%",
          transition: "all 0.5s",
          zIndex: 1,
        }}
      />
      {/* After pseudo-element */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: hover ? "100%" : "20%",
          height: hover ? "100%" : "20%",
          bgcolor: "lightblue",
          borderRadius: hover ? 2 : "0 100% 0 15px",
          transition: "all 0.5s",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        {hover && (
          <Typography fontWeight="bold" fontSize={25} color="black">
            HELLO
          </Typography>
        )}
      </Box>
      {!hover && (
        <Typography fontWeight="bold" fontSize={25} color="white">
          Hover Me
        </Typography>
      )}
    </Box>
  );
};

export default HoverDynamicCard;
