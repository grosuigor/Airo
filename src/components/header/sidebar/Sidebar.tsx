"use client";

import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";

import { SidebarButton } from "./button";
import { SidebarContent } from "./content";
import { SidebarHeader } from "./header";
import { useSidebarContext } from "./providers";
import { styles } from "./styles";

function Sidebar() {
  const { opened, close } = useSidebarContext();

  return (
    <Drawer anchor="right" open={opened} onClose={close} sx={styles.root}>
      <Stack sx={styles.container}>
        <SidebarHeader />
        <SidebarContent />
      </Stack>
    </Drawer>
  );
}

Sidebar.Button = SidebarButton;

export { Sidebar };
