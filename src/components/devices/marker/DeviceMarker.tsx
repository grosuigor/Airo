"use client";

import { useId, useMemo } from "react";

import Box from "@mui/material/Box";
import GlobalStyles from "@mui/material/GlobalStyles";

import { AdvancedMarker } from "@vis.gl/react-google-maps";

import { colors } from "@/lib/tokens";
import { getDeviceScore } from "@/utils";

import { MARKER_CENTER, MARKER_RING_PATH, MARKER_SIZE } from "./data";
import { useDeviceMarker } from "./hooks";
import { globalStyles, styles } from "./styles";
import type { DeviceMarkerProps } from "./types";

export function DeviceMarker({
  sx,
  device,
  onClick,
  "aria-label": ariaLabel,
  ...props
}: DeviceMarkerProps) {
  const id = useId();
  const { quality } = useMemo(() => getDeviceScore(device), [device]);
  const gradientId = useMemo(() => `${id}-${quality}`, [id, quality]);
  const { start, end } = useMemo(() => colors.marker[quality], [quality]);
  const { advancedMarkerRef, eventListeners, isActive } = useDeviceMarker();

  return (
    <>
      <GlobalStyles styles={globalStyles} />
      <AdvancedMarker
        ref={advancedMarkerRef}
        position={{
          lat: device.coordinates.latitude,
          lng: device.coordinates.longitude,
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
