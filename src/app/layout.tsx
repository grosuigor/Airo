import { Fab, Typography } from "@mui/material";

import { fontVariables } from "@/lib/fonts";
import { GlobalProvider } from "@/providers";

import { metadata } from "./metadata";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariables} data-mui-color-scheme="dark">
      <body>
        <GlobalProvider>{children}</GlobalProvider>
        <Fab
          aria-label="version"
          disabled
          size="small"
          sx={{ position: "fixed", bottom: 30, left: 10, zIndex: 1200 }}
        >
          <Typography variant="caption" sx={{ color: "common.white" }}>
            v{process.env.NEXT_PUBLIC_VERSION}
          </Typography>
        </Fab>
      </body>
    </html>
  );
}
