"use client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";

import theme from "@/lib/theme";

import { AuthProvider } from "./auth";
import { GlobalBackdropProvider } from "./backdrop";
import { DevicesProvider } from "./devices";
import { MapProvider } from "./MapProvider";
import { ToastProvider } from "./toast";

export function GlobalProvider({ children }: React.PropsWithChildren) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MapProvider>
          <AuthProvider>
            <DevicesProvider>
              <ToastProvider>
                <GlobalBackdropProvider>{children}</GlobalBackdropProvider>
              </ToastProvider>
            </DevicesProvider>
          </AuthProvider>
        </MapProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
