/* eslint-disable @typescript-eslint/no-explicit-any */
import styleConstants from "@/app/theme/styleConstants";

export const styles = (theme: any) => {
  const isDark = theme.palette.mode === "dark";
  const { fontSizes, colorPalette } = styleConstants;
  return {
    name: {
      fontWeight: 700,
      fontSize: { xs: fontSizes.xxLarge, md: fontSizes.xHuge },
      textAlign: { xs: "center", md: "left" },
    },
    title: {
      mb: 2,
      textAlign: { xs: "center", md: "left" },
    },
    subheadingName: {
      borderRight: "2px solid",
      marginLeft: 2,
      animation: "blink 1s steps(1) infinite",
    },
    description: {
      textAlign: { xs: "center", md: "left" },
    },
    avatar: {
      width: { xs: 180, md: 320, lg: 380 },
      height: { xs: 180, md: 320, lg: 380 },
      mx: "auto",
      boxShadow: `${
        isDark
          ? "rgba(0, 0, 0) 0px 8px 24px"
          : "rgba(149, 157, 165, 0.2) 0px 8px 24px"
      }`,
      border: `6px solid ${
        isDark ? theme.palette.primary.light : theme.palette.primary.main
      }`,
    },
    avtaarWrapper: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backfaceVisibility: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    mainAvtaarWrapper: {
      position: "relative",
      width: "100%",
      height: "100%",
      transition: "transform 0.8s cubic-bezier(.4,2,.6,1)",
      transformStyle: "preserve-3d",
    },
    avtaarProfile: {
      display: "inline-block",
      perspective: 1000,
      width: { xs: 180, md: 320, lg: 380 },
      height: { xs: 180, md: 320, lg: 380 },
      maxWidth: "100%",
    },
    innerBackAvtaar: {
      position: "absolute",
      width: "100%",
      height: "100%",
      backfaceVisibility: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: "rotateY(180deg)",
    },
    descCoverStart: {
      fontFamily: "monospace",
      position: "absolute",
      display: { xs: "none", md: "block" },
      top: "-14%",
      left: "32%",
      transform: "translate(-50%, -50%)",
      color: theme.palette.mode === "dark" ? "#fff2" : "#0002",
      fontWeight: 700,
      fontSize: { xs: fontSizes.medium, md: fontSizes.huge },
      zIndex: 0,
      userSelect: "none",
      pointerEvents: "none",
      letterSpacing: 2,
      whiteSpace: "nowrap",
    },
    descCoverEnd: {
      fontFamily: "monospace",
      display: { xs: "none", md: "block" },
      position: "absolute",
      bottom: "-50%",
      left: "2%",
      transform: "translate(-50%, -50%)",
      color: theme.palette.mode === "dark" ? "#fff2" : "#0002",
      fontWeight: 700,
      fontSize: { xs: fontSizes.medium, md: fontSizes.huge },
      zIndex: 0,
      userSelect: "none",
      pointerEvents: "none",
      letterSpacing: 2,
      whiteSpace: "nowrap",
    },
    resumeButton: {
      borderRadius: "999px",
      px: 3,
      py: 1,
      fontWeight: 600,
      textTransform: "none",
      fontSize: "1rem",
      transition: "background 0.3s, color 0.3s, border-color 0.3s",
      borderColor: colorPalette.azure,
      color: "primary.main",
      overflow: "hidden",
      position: "relative",
      "&:hover": {
        backgroundColor: colorPalette.azure,
        color: "white",
        borderColor: colorPalette.azure,
        ".download-icon": {
          transform: "translateX(6px) scale(1.2)",
          opacity: 1,
        },
      },
    },
  };
};
