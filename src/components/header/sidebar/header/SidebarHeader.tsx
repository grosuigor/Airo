"use client";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import CloseIcon from "@mui/icons-material/Close";

import { useSidebarContext } from "../providers";
import { styles } from "./styles";

export function SidebarHeader() {
  const { close } = useSidebarContext();

  return (
    <Stack direction="row" sx={styles.root}>
      <Typography variant="h4" color="text.primary" sx={{ flexGrow: 1 }}>
        Settings
      </Typography>
      <IconButton aria-label="close" onClick={close}>
        <CloseIcon />
      </IconButton>
    </Stack>
  );
}
