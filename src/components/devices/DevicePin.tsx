"use client";

import { useId } from "react";

import Box from "@mui/material/Box";
import IconButton, { type IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import LocationOnIcon from "@mui/icons-material/LocationOn";

import { colors } from "@/lib/tokens";

type DevicePinProps = Omit<IconButtonProps, "children"> & {
  value: number | string;
};

const PIN_RATIO = 7 / 10;
const PIN_HEIGHT = 56;
const PIN_WIDTH = PIN_HEIGHT * PIN_RATIO;

const CIRCLE_SIZE = 24;
const CIRCLE_TOP = 8;
const CIRCLE_LEFT = (PIN_WIDTH - CIRCLE_SIZE) / 2;

const { gradientStart, gradientEnd } = colors.pin;

export function DevicePin({ value, sx, ...props }: DevicePinProps) {
  const gradientId = useId();

  return (
    <IconButton
      aria-label="pin"
      disableRipple
      {...props}
      sx={[
        (theme) => ({
          position: "relative",
          width: PIN_WIDTH,
          height: PIN_HEIGHT,
          p: 0,
          flexShrink: 0,
          transition: theme.transitions.create("transform"),
          "&:hover, &.Mui-focusVisible, &.Mui-focused": {
            transform: "translateY(-8px)",
          },
        }),
        ...(sx ? (Array.isArray(sx) ? sx : [sx]) : []),
      ]}
    >
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
      <Box
        sx={{
          position: "absolute",
          top: CIRCLE_TOP,
          left: CIRCLE_LEFT,
          width: CIRCLE_SIZE,
          height: CIRCLE_SIZE,
          bgcolor: "common.white",
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Typography variant="micro" sx={{ color: "common.black", textTransform: "uppercase" }}>
          {value}
        </Typography>
      </Box>
    </IconButton>
  );
}
