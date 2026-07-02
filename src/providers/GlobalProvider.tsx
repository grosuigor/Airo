"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";

import theme from "@/lib/theme";

import { MapProvider } from "./MapProvider";

export function GlobalProvider({ children }: React.PropsWithChildren) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MapProvider>{children}</MapProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
