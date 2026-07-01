"use client";

import { useId, useMemo } from "react";

import IconButton from "@mui/material/IconButton";

import { colors } from "@/lib/tokens";

import { combineSx } from "../combineSx";
import { MARKER_CENTER, MARKER_RADIUS, MARKER_SIZE, MARKER_STROKE } from "./data";
import { styles } from "./styles";
import type { DeviceMarkerProps } from "./types";

export function DeviceMarker({ color, sx, ...props }: DeviceMarkerProps) {
  const id = useId();
  const gradientId = useMemo(() => `${id}-${color}`, [id, color]);
  const { start, end } = useMemo(() => colors.marker[color], [color]);

  return (
    <IconButton
      aria-label={`${color} marker`}
      disableRipple
      sx={combineSx(styles.root, sx)}
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
            x1={MARKER_CENTER}
            y1={0}
            x2={MARKER_CENTER}
            y2={MARKER_SIZE}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={start} />
            <stop offset="100%" stopColor={end} />
          </linearGradient>
        </defs>
        <circle
          cx={MARKER_CENTER}
          cy={MARKER_CENTER}
          r={MARKER_RADIUS}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={MARKER_STROKE}
        />
      </svg>
    </IconButton>
  );
}
