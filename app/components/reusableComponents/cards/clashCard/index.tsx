import React from "react";
import { Box, Typography } from "@mui/material";

const ClashCard: React.FC = () => {
  return (
    <Box
      sx={{
        width: 230,
        borderRadius: 2,
        backgroundColor: "#1b233d",
        padding: 1,
        overflow: "hidden",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 20px 0px",
        transition: "transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          height: 150,
          borderRadius: 2,
          display: "flex",
          backgroundImage: "url('./images/harryPotter.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          flexDirection: "column",
          // background:
          //   "linear-gradient(45deg, rgb(4, 159, 187) 0%, rgb(80, 246, 255) 100%)",
          position: "relative",
        }}
      >
        <Box
          sx={{
            borderBottomRightRadius: 1,
            height: 30,
            width: 130,
            backgroundColor: "#1b233d",
            position: "relative",
            transform: "skew(-40deg)",
            boxShadow: "-10px -10px 0 0 #1b233d",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: 30,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              height: "100%",
              padding: "8px 15px",
              display: "flex",
              gap: 1,
            }}
          >
            {/* Add other icons similarly */}
          </Box>
        </Box>
      </Box>
      {/* Bottom Section */}
      <Box
        sx={{
          marginTop: 2,
          padding: "10px 5px",
        }}
      >
        <Typography
          sx={{
            display: "block",
            fontSize: 17,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",
            letterSpacing: 2,
          }}
        >
          E-COMMERCE PORTAL
        </Typography>
        <Typography variant="body2" sx={{ fontSize: 10, textAlign: "center" }}>
          It's a dynamic multivendor eCommerce platform that empowers...
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 2,
          }}
        >
          <Box
            sx={{
              flex: "30%",
              textAlign: "center",
              padding: 1,
              color: "rgba(170, 222, 243, 0.721)",
            }}
          >
            <Typography sx={{ fontSize: 12, display: "block" }}>
              Tech used:
            </Typography>
            <Typography sx={{ fontSize: 9 }}>
              Next.js, Java and MySql
            </Typography>
          </Box>
          {/* Add other items similarly */}
        </Box>
      </Box>
    </Box>
  );
};

export default ClashCard;
