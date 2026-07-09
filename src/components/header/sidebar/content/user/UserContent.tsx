"use client";

import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Stack from "@mui/material/Stack";

import GppGoodIcon from "@mui/icons-material/GppGood";
import LogoutIcon from "@mui/icons-material/Logout";

import { styles } from "./styles";
import type { UserContentProps } from "./types";

export function UserContent({ signOut }: UserContentProps) {
  return (
    <Stack sx={styles.root}>
      <Stack sx={styles.devices}>
        <Typography variant="h4" color="text.primary">
          No devices found
        </Typography>
        <Button variant="text">+ Add new</Button>
      </Stack>
      <ButtonGroup variant="contained" color="primary" sx={styles.buttons}>
        <Button>
          <GppGoodIcon />
          Privacy
        </Button>
        <Button onClick={signOut}>
          <LogoutIcon />
          Sign Out
        </Button>
      </ButtonGroup>
    </Stack>
  );
}
