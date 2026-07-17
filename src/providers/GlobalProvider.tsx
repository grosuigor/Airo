"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";

import theme from "@/lib/theme";

import { LocalProvider } from "./LocalProvider";

export function GlobalProvider({ children }: React.PropsWithChildren) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalProvider>{children}</LocalProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
