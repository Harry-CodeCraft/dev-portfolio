import { Theme } from "@mui/material";

export const skillsStyles = (theme: Theme) => {
  return {
    mainBox: {
      position: "relative",
      overflow: "hidden",
      bgcolor: theme.palette.background.default,
      mt: 8,
      mb: 8,
    },
    skillPaper: {
      width: "100%",
      height: "100%",
      bgcolor: theme.palette.mode === "dark" ? "#23283b" : "#fff",
      borderRadius: 3,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      border: "2px solid",
      borderColor: theme.palette.primary.light,
      boxShadow:
        "0 0 12px 0px rgb(0 102 255 / 40%), 0 0 20px 5px rgb(0 102 255 / 10%)",
      "&:hover": {
        transform: "scale(1.08)",
        boxShadow:
          "0 0 12px 2px rgb(0 102 255 / 40%), 0 0 20px 5px rgb(0 102 255 / 20%)",
      },
    },
    skillIcon: {
      fontSize: 40,
      marginBottom: 16,
    },
    skillName: {
      textAlign: "center",
      fontWeight: 600,
      fontSize: 13,
    },
    lampEffect: {
      position: "absolute",
      zIndex: 30,
      mixBlendMode: "soft-light",
      willChange: "transform, opacity",
      transform: "translateZ(0)",
    },
    lampBackground: {
      position: "absolute",
      width: "100%",
      height: "100%",
      background:
        "radial-gradient(circle, #fdba74 30%, #fb923c 50%, transparent 80%)",
      borderRadius: "50%",
      filter: "blur(60px)",
    },
  };
};
