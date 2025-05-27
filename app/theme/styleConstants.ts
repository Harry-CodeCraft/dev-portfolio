// create object with style constants for the theme

const colorPalette = {
  midnightBlue: "#00171F",
  midnightBlue2: "#001319",
  prussianBlue: "#002659",
  nonBlue: "#ADEBFF",
  azure: "#1976d2",
  charcoal: "#303134",
  darkCharcoal: "#1f1f1f",
  offWhite: "#fdfdfe",
  platinumWhite: "#e7e8e9",
  platinumWhite80: "#787878cc",
  lightWhite: "##fff2",
  justWhite: "#f6f6f6",
};

const fontSizes = {
  xtiny: "0.625rem", // 10px
  tiny: "0.75rem", // 12px
  small: "0.875rem", // 14px
  medium: "1rem", // 16px
  large: "1.25rem", // 20px
  xLarge: "1.5rem", // 24px
  xxLarge: "2rem", // 32px
  xxxLarge: "2.5rem", // 40px
  huge: "3rem", // 48px
  xHuge: "3.75rem", // 60px
};

export default {
  colorPalette,
  fontSizes,
} as const;
