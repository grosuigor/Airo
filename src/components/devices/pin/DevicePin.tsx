"use client";

import { useId } from "react";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import LocationOnIcon from "@mui/icons-material/LocationOn";

import { combineSx } from "../combineSx";
import { gradientEnd, gradientStart, PIN_HEIGHT } from "./data";
import { styles } from "./styles";
import type { DevicePinProps } from "./types";

export function DevicePin({ value, sx, ...props }: DevicePinProps) {
  const gradientId = useId();

  return (
    <IconButton aria-label="pin" disableRipple {...props} sx={combineSx(styles.root, sx)}>
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
      <Box sx={styles.circle}>
        <Typography variant="micro" sx={styles.value}>
          {value}
        </Typography>
      </Box>
    </IconButton>
  );
}
