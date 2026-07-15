"use client";

import { useId } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import LocationOnIcon from "@mui/icons-material/LocationOn";

import { AdvancedMarker } from "@vis.gl/react-google-maps";

import { combineSx } from "@/components/combineSx";

import { gradientEnd, gradientStart, PIN_HEIGHT } from "./data";
import { styles } from "./styles";
import type { DevicePinProps } from "./types";

export function DevicePin({ value, sx, longitude, latitude, ...props }: DevicePinProps) {
  const gradientId = useId().replaceAll(":", "");
  const showValue = value !== undefined && value !== "";

  return (
    <AdvancedMarker
      position={{ lat: latitude, lng: longitude }}
      anchorLeft="-50%"
      anchorTop="-100%"
    >
      <Box aria-hidden={!showValue} {...props} sx={combineSx(styles.root, sx)}>
        <svg width={0} height={0} aria-hidden>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={gradientStart} />
              <stop offset="100%" stopColor={gradientEnd} />
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
        {showValue && (
          <Box sx={styles.circle}>
            <Typography variant="micro" sx={styles.value}>
              {value}
            </Typography>
          </Box>
        )}
      </Box>
    </AdvancedMarker>
  );
}
