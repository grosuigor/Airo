"use client";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import { BackdropProvider } from "@/providers";

import { Sidebar } from "../sidebar";
import { styles } from "./styles";

export function Profile() {
  return (
    <BackdropProvider value={{ id: "sidebarDrawer" }}>
      <Stack direction="row" spacing={1.5} sx={styles.root}>
        <Sidebar />
        <IconButton aria-label="show new notifications" size="small">
          <NotificationsOutlinedIcon />
        </IconButton>
        <Sidebar.Button />
      </Stack>
    </BackdropProvider>
  );
}
