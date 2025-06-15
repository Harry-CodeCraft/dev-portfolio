"use client";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";

import getTheme from "./theme";
import Header from "../components/reusableComponents/header";

export function StyledRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <CssBaseline />
      <Header toggleMode={toggleMode} mode={mode} />
      {children}
    </ThemeProvider>
  );
}
