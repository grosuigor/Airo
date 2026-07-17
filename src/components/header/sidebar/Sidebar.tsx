"use client";

import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";

import { useBackdropContext } from "@/providers";

import { SidebarButton } from "./button";
import { SidebarContent } from "./content";
import { SidebarHeader } from "./header";
import { styles } from "./styles";

function Sidebar() {
  const { opened, close } = useBackdropContext();

  return (
    <Drawer open={opened} onClose={close}>
      <Stack sx={styles.container}>
        <SidebarHeader />
        <SidebarContent />
      </Stack>
    </Drawer>
  );
}

Sidebar.Button = SidebarButton;

export { Sidebar };
