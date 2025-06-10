import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styleConstants from "@/app/theme/styleConstants";
import Image from "next/image";

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
      px: 3,
      py: 1,
      fontWeight: 400,
      textTransform: "none",
      width: { xs: "100%", sm: "auto" },
      "&:hover": { bgcolor: "#23232a" },
    },
  };
};

const IdentityCard = () => {
  const sx = styles();
  return (
    <Card sx={sx.card}>
      <Box sx={sx.headerBox}>
        <CardHeader
          sx={sx.headerTitle}
          // title={
          //   <Typography variant="subtitle1" fontWeight={700}>
          //     $150/hr
          //   </Typography>
          // }
          // action={
          //   <Box sx={{ ml: 1 }}>
          //     <svg
          //       height={20}
          //       width={20}
          //       stroke="currentColor"
          //       strokeWidth="1.5"
          //       viewBox="0 0 24 24"
          //       fill="none"
          //       xmlns="http://www.w3.org/2000/svg"
          //     >
          //       <path
          //         d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          //         strokeLinejoin="round"
          //         strokeLinecap="round"
          //       />
          //     </svg>
          //   </Box>
          // }
        />
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
      <CardActions sx={{ px: 2, pb: 2 }}>
        <Button variant="contained" sx={sx.button}>
          view
        </Button>
      </CardActions>
    </Card>
  );
};

export default IdentityCard;
