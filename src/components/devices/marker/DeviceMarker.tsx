"use client";

import { useId, useMemo } from "react";

import Box from "@mui/material/Box";
import GlobalStyles from "@mui/material/GlobalStyles";

import { AdvancedMarker } from "@vis.gl/react-google-maps";

import { colors } from "@/lib/tokens";

import { MARKER_CENTER, MARKER_RING_PATH, MARKER_SIZE } from "./data";
import { useDeviceMarker } from "./hooks";
import { styles } from "./styles";
import type { DeviceMarkerProps } from "./types";

export function DeviceMarker({
  color,
  sx,
  latitude,
  longitude,
  onClick,
  "aria-label": ariaLabel,
  ...props
}: DeviceMarkerProps) {
  const id = useId();
  const gradientId = useMemo(() => `${id}-${color}`, [id, color]);
  const { start, end } = useMemo(() => colors.marker[color], [color]);
  const { advancedMarkerRef, eventListeners, isActive } = useDeviceMarker();

  return (
    <>
      <GlobalStyles
        styles={{
          "gmp-advanced-marker": {
            outline: "none",
          },
          "gmp-advanced-marker:focus, gmp-advanced-marker:focus-visible": {
            outline: "none",
          },
        }}
      />
      <AdvancedMarker
        ref={advancedMarkerRef}
        position={{
          lat: latitude,
          lng: longitude,
        }}
        anchorLeft="-50%"
        anchorTop="-50%"
        title={ariaLabel}
        clickable={Boolean(onClick)}
        onClick={onClick}
        {...eventListeners}
      >
        <Box
          sx={[
            styles.root,
            isActive && styles.active,
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
            <path d={MARKER_RING_PATH} fill={`url(#${gradientId})`} fillRule="evenodd" />
          </svg>
        </Box>
      </AdvancedMarker>
    </>
  );
}
