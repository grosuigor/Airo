"use client";

import { useEffect } from "react";

import Drawer from "@mui/material/Drawer";

import { useBackdropContext, useDeviceViewContext } from "@/providers";

import { Content } from "./content/Content";

export function DeviceDrawer() {
  const { opened, close } = useBackdropContext();
  const { device } = useDeviceViewContext();

  useEffect(() => {
    if (!device) {
      close();
    }
  }, [device, close]);

  return (
    <Drawer open={opened} onClose={close}>
      {device && <Content device={device} />}
    </Drawer>
  );
}
