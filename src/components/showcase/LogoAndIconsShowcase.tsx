import Image from "next/image";

import { useState } from "react";

import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";

import NotificationsIcon from "@mui/icons-material/Notifications";

import { DeviceMarker, DeviceMetric, DevicePin } from "../devices";

export function LogoAndIconsShowcase() {
  const [switchChecked, setSwitchChecked] = useState(false);

  return (
    <Stack spacing={6} sx={{ alignItems: "flex-start" }}>
      <Image loading="eager" src="/logo.svg" alt="Airo" width={330} height={80} />
      <Stack direction="row" spacing={3} sx={{ alignItems: "flex-start" }}>
        <Stack spacing={3}>
          <Stack>
            <IconButton aria-label="show new notifications" size="small">
              <NotificationsIcon />
            </IconButton>
            <IconButton aria-label="show new notifications" size="small">
              <Badge variant="dot">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Stack>
          <Stack spacing={1}>
            <DeviceMarker color="green" latitude={51.5074} longitude={-0.1278} />
            <DeviceMarker color="orange" latitude={51.5074} longitude={-0.1278} />
            <DeviceMarker color="red" latitude={51.5074} longitude={-0.1278} />
          </Stack>
        </Stack>

        <Stack spacing={3}>
          <DevicePin value={7.8} latitude={51.5074} longitude={-0.1278} />
          <Switch checked={switchChecked} onChange={() => setSwitchChecked(!switchChecked)} />
          <DeviceMetric label="CO2" value="696.5" />
        </Stack>
      </Stack>
    </Stack>
  );
}
