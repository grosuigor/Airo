"use client";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";

import { useUserInfo } from "../hooks";
import { useSidebarContext } from "../providers";
import { styles } from "./styles";

export function SidebarHeader() {
  const { close } = useSidebarContext();
  const { name, username, avatarSrc, fallbackInitial } = useUserInfo();

  if (!username) {
    return (
      <Stack direction="row" sx={styles.root}>
        <Typography variant="h4" color="text.primary" sx={styles.title}>
          Settings
        </Typography>
        <IconButton aria-label="close" onClick={close}>
          <CloseIcon />
        </IconButton>
      </Stack>
    );
  }

  return (
    <Stack direction="row" sx={styles.root}>
      <Avatar alt="profile" src={avatarSrc} sx={styles.avatar}>
        {fallbackInitial ?? <PersonIcon />}
      </Avatar>
      <Stack sx={styles.userInfo}>
        <Typography variant="h4" color="text.primary" sx={styles.name}>
          {name}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {`@${username}`}
        </Typography>
      </Stack>
      <IconButton aria-label="close" onClick={close}>
        <CloseIcon />
      </IconButton>
    </Stack>
  );
}
