import { createTheme } from "@mui/material/styles";
import styleConstants from "./styleConstants";

const { colorPalette } = styleConstants;

const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            primary: {
              main: colorPalette.azure,
              light: colorPalette.vibrantBlue,
            }, // custom light primary
            secondary: { main: colorPalette.azure },
            background: { default: colorPalette.offWhite, paper: "#fff" },
            text: {
              primary: colorPalette.justBlack,
              secondary: colorPalette.darkCharcoal,
            },
          }
        : {
            primary: {
              main: colorPalette.azure,
              light: colorPalette.vibrantBlue,
            }, // custom dark primary
            secondary: {
              main: colorPalette.azure,
              light: colorPalette.offWhite,
            },
            background: {
              default: colorPalette.midnightBlue,
              paper: colorPalette.midnightBlue2,
            },
            text: {
              primary: colorPalette.offWhite,
              secondary: colorPalette.platinumWhite,
            },
          }),
    },
  });

export default getTheme;
