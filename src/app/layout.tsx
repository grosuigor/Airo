import { GlobalProvider } from "@/providers";
import { Fab, Typography } from "@mui/material";
import { metadata } from "./metadata";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>{children}</GlobalProvider>
        <Fab
          color="primary"
          aria-label="version"
          disabled
          size="small"
          sx={{ position: "fixed", bottom: 20, left: 20, zIndex: 1200 }}
        >
          <Typography variant="caption" color="white">
            v0.1
          </Typography>
        </Fab>
      </body>
    </html>
  );
}
