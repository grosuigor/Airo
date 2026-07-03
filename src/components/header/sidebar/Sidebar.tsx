"use client";

import Image from "next/image";

import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";

import { styles } from "./styles";

interface SidebarProps {
  opened: boolean;
  close: () => void;
}

export function Sidebar({ opened, close }: SidebarProps) {
  return (
    <Drawer anchor="right" open={opened} onClose={close} sx={styles.root}>
      <Stack sx={styles.container}>
        <Stack direction="row" sx={styles.header}>
          <Typography variant="h4" color="text.primary" sx={{ flexGrow: 1 }}>
            Settings
          </Typography>
          <IconButton aria-label="close" onClick={close}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Stack sx={styles.content}>
          <Image src="/auth.svg" alt="auth" width={141} height={97} />
          <Typography variant="h5" color="text.primary">
            Please Log In via Gmail SSO account to have possibility to manage personal devices and
            recieve notifications.
          </Typography>
        </Stack>
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
    </Drawer>
  );
}
