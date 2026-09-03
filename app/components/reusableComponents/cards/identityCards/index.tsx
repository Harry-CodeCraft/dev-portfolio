import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

import styleConstants from "@/app/theme/styleConstants";

const styles = () => {
  const { fontSizes, colorPalette } = styleConstants;
  return {
    card: {
      maxWidth: 300,
      margin: "auto",
      borderRadius: 3,
      overflow: "visible",
      bgcolor: "#fefefe",
      color: "#141417",
      // background: `linear-gradient(135deg, ${colorPalette.justBlack} 0%, ${colorPalette.platinumWhite} 100%)`,
    },
    headerBox: {
      bgcolor: colorPalette.justBlack,
      borderRadius: "8px 8px 0 0",
      color: colorPalette.platinumWhite,
      p: 3,
    },
    headerTitle: {
      p: 0,
      mb: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    titleText: {
      mt: 4,
      mb: 0,
      p: 4,
      fontSize: fontSizes.xLarge,
      lineHeight: 1.2,
      "& span": {
        backgroundColor: colorPalette.orange,
        color: colorPalette.justBlack,
        px: 1,
        borderRadius: 1,
      },
    },
    button: {
      bgcolor: "#141417",
      color: "#fff",
      borderRadius: 2,
      px: 1.5,
      py: 1,
      fontWeight: 400,
      textTransform: "none",
      flex: 1,
      minWidth: 0,
      whiteSpace: "nowrap",
      "&:hover": { bgcolor: "#23232a" },
    },
  };
};

const IdentityCard = () => {
  const sx = styles();
  const router = useRouter();
  // Uncomment the following line if you are using Next.js routing

  const handleRoute = () => {
    // Implement routing logic here
    router.push("/portfolio");
  };
  return (
    <Card sx={sx.card}>
      <Box sx={sx.headerBox}>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={sx.titleText}
          textAlign={"center"}
        >
          HARRY <br />
          <span>CODECRAFT</span>
        </Typography>
      </Box>
      <CardContent sx={{ py: 2, px: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Image
            src="/images/harryPotter.avif"
            alt="Avatar"
            width={40}
            height={40}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
            }}
            loading="lazy"
          />
          <Box>
            <Typography variant="subtitle1" fontWeight={700}>
              Harry Sin
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions sx={{ px: 2, pb: 2, gap: 1, flexDirection: "row" }}>
        <Button
          variant="contained"
          sx={sx.button}
          onClick={() => handleRoute()}
        >
          View Portfolio
        </Button>
        <Button
          component="a"
          href="https://thestudyroom.harrycodecraft.com/"
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          sx={{ ...sx.button, bgcolor: "transparent", color: "#141417" }}
        >
          Study Room
        </Button>
      </CardActions>
    </Card>
  );
};

export default IdentityCard;
