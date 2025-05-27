import { createTheme } from "@mui/material/styles";
import styleConstants from "./styleConstants";

const { colorPalette } = styleConstants;

const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: { main: "#1976d2" }, // custom light primary
            secondary: { main: "#9c27b0" },
            background: { default: colorPalette.offWhite, paper: "#fff" },
            text: {
              primary: colorPalette.azure,
              secondary: colorPalette.darkCharcoal,
            },
          }
        : {
            primary: { main: "#90caf9", light: colorPalette.azure }, // custom dark primary
            secondary: { main: "#ce93d8" },
            background: {
              default: colorPalette.midnightBlue,
              paper: "#1e1e1e",
            },
            text: {
              primary: colorPalette.offWhite,
              secondary: colorPalette.platinumWhite,
            },
          }),
    },
  });

export default getTheme;
