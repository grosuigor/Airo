"use client";

import { useId, useMemo } from "react";

import IconButton, { type IconButtonProps } from "@mui/material/IconButton";

import { airoColors } from "@/lib/tokens";

type MarkerColor = keyof typeof airoColors.marker;

type DeviceMarkerProps = Omit<IconButtonProps, "children" | "color"> & {
  color: MarkerColor;
};

const MARKER_SIZE = 16;
const MARKER_STROKE = 4;
const MARKER_BORDER = 3;
const RADIUS = (MARKER_SIZE - MARKER_STROKE) / 2;
const CENTER = MARKER_SIZE / 2;

export function DeviceMarker({ color, sx, ...props }: DeviceMarkerProps) {
  const id = useId();
  const gradientId = useMemo(() => `${id}-${color}`, [id, color]);
  const { start, end } = useMemo(() => airoColors.marker[color], [color]);

  return (
    <IconButton
      aria-label={`${color} marker`}
      disableRipple
      sx={[
        (theme) => ({
          width: MARKER_SIZE + MARKER_BORDER,
          height: MARKER_SIZE + MARKER_BORDER,
          p: 0,
          flexShrink: 0,
          borderRadius: "50%",
          cursor: "pointer",
          border: `${MARKER_BORDER}px solid transparent`,
          transition: theme.transitions.create("border-color"),
          "&:hover, &.Mui-focusVisible, &.Mui-focused": {
            borderColor: theme.palette.text.primary,
          },
        }),
        ...(sx ? (Array.isArray(sx) ? sx : [sx]) : []),
      ]}
      {...props}
    >
      <svg
        width={MARKER_SIZE}
        height={MARKER_SIZE}
        viewBox={`0 0 ${MARKER_SIZE} ${MARKER_SIZE}`}
        aria-hidden
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1={CENTER}
            y1={0}
            x2={CENTER}
            y2={MARKER_SIZE}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={start} />
            <stop offset="100%" stopColor={end} />
          </linearGradient>
        </defs>
        <circle
          cx={CENTER}
          cy={CENTER}
          r={RADIUS}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={MARKER_STROKE}
        />
      </svg>
    </IconButton>
  );
}
