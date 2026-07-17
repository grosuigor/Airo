"use client";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Stack from "@mui/material/Stack";

import GppGoodIcon from "@mui/icons-material/GppGood";
import LogoutIcon from "@mui/icons-material/Logout";

import { DeviceList } from "@/components/devices";
import { BackdropProvider } from "@/providers";

import { styles } from "./styles";
import type { UserContentProps } from "./types";

export function UserContent({ signOut }: UserContentProps) {
  return (
    <Stack sx={styles.root}>
      <BackdropProvider value={{ id: "deviceModal" }}>
        <DeviceList />
      </BackdropProvider>
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
