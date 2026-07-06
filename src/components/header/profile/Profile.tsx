"use client";

import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import NotificationsIcon from "@mui/icons-material/Notifications";

import { Sidebar, SidebarProvider } from "../sidebar";
import { styles } from "./styles";

export function Profile() {
  return (
    <SidebarProvider>
      <Stack direction="row" spacing={1.5} sx={styles.root}>
        <Sidebar />
        <IconButton aria-label="show new notifications" size="small">
          <Badge variant="dot">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Sidebar.Button />
      </Stack>
    </SidebarProvider>
  );
}
