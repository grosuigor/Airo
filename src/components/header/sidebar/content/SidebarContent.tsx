"use client";

import Image from "next/image";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { styles } from "./styles";

export function SidebarContent() {
  return (
    <Stack sx={styles.root}>
      <Image src="/auth.svg" alt="auth" width={141} height={97} />
      <Typography variant="h5" color="text.primary">
        Please Log In via Gmail SSO account to have possibility to manage personal devices and
        recieve notifications.
      </Typography>
      <Stack sx={styles.buttonContainer}>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Sign In
        </Button>
        <Button variant="text" sx={{ mt: 2, color: "text.primary" }}>
          About this application
          <ArrowForwardIcon fontSize="small" />
        </Button>
      </Stack>
    </Stack>
  );
}
