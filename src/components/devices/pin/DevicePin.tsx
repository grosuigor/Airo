"use client";

import { useId, useMemo } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import LocationOnIcon from "@mui/icons-material/LocationOn";

import { AdvancedMarker } from "@vis.gl/react-google-maps";

import { colors } from "@/lib/tokens";
import { combineSx, getDeviceReadings } from "@/utils";

import { PIN_HEIGHT } from "./data";
import { styles } from "./styles";
import type { DevicePinProps } from "./types";

export function DevicePin({ device, sx, ...props }: DevicePinProps) {
  const gradientId = useId().replaceAll(":", "");
  const {
    overall: { score, quality },
  } = useMemo(() => getDeviceReadings(device), [device]);
  const { start, end } = useMemo(() => colors.marker[quality], [quality]);

  return (
    <AdvancedMarker
      position={{ lat: device.coordinates.latitude, lng: device.coordinates.longitude }}
      anchorLeft="-50%"
      anchorTop="-100%"
    >
      <Box {...props} sx={combineSx(styles.root, sx)}>
        <svg width={0} height={0} aria-hidden>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={start} />
              <stop offset="100%" stopColor={end} />
            </linearGradient>
          </defs>
        </svg>
        <LocationOnIcon
          sx={{
            fontSize: PIN_HEIGHT,
            "& path": {
              fill: `url(#${gradientId})`,
            },
          }}
        />
        <Box sx={styles.circle}>
          <Typography variant="micro" sx={styles.value}>
            {score}
          </Typography>
        </Box>
      </Box>
    </AdvancedMarker>
  );
}
