"use client";

import { useCallback, useState } from "react";

import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

import { Sidebar } from "../sidebar";
import { styles } from "./styles";

export function Profile() {
  const [sidebarOpened, setSidebarOpened] = useState(true);

  const toggleSidebar = useCallback(() => {
    setSidebarOpened((prev) => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setSidebarOpened(false);
  }, []);

  return (
    <Stack direction="row" spacing={1.5} sx={styles.root}>
      <Sidebar opened={sidebarOpened} close={closeSidebar} />
      <IconButton aria-label="show new notifications" size="small">
        <Badge variant="dot">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Button variant="text" sx={styles.button} onClick={toggleSidebar}>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Avatar>
            <PersonIcon />
          </Avatar>
          <Typography variant="body1" sx={{ color: "text.muted" }}>
            Login
          </Typography>
        </Stack>
        <ArrowDropDownIcon
          fontSize="small"
          sx={(theme) => ({
            transition: theme.transitions.create("transform"),
            transform: `rotate(${sidebarOpened ? "180deg" : "0deg"})`,
          })}
        />
      </Button>
    </Stack>
  );
}
