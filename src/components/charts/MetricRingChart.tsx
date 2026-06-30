"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { airoChartSizes, airoChartStroke, type MetricColor } from "@/lib/tokens";

import { RadialGauge } from "./RadialGauge";

export type MetricRingChartProps = {
  label: string;
  value: string;
  progress: number;
  color: MetricColor;
};

export function MetricRingChart({ label, value, progress, color }: MetricRingChartProps) {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0.75,
        flex: 1,
        minWidth: 0,
        cursor: "default",

        "& .radial-gauge-progress": {
          transition: theme.transitions.create("stroke-width"),
        },

        "&:hover": {
          "& .metric-ring-chart-label": {
            color: theme.palette.text.primary,
            opacity: 1,
          },
          "& .radial-gauge-progress": {
            strokeWidth: airoChartStroke.hover,
          },
        },
      })}
    >
      <Box
        sx={{
          position: "relative",
          width: airoChartSizes.ring,
          height: airoChartSizes.ring,
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box sx={{ position: "absolute", inset: 0 }}>
          <RadialGauge progress={progress} color={color} variant="ring" />
        </Box>
        <Typography variant="chartValue" sx={{ textAlign: "center", px: 0.25 }}>
          {value}
        </Typography>
      </Box>
      <Typography
        className="metric-ring-chart-label"
        variant="labelMuted"
        sx={(theme) => ({
          textAlign: "center",
          whiteSpace: "nowrap",
          transition: theme.transitions.create("color"),
        })}
      >
        {label}
      </Typography>
    </Box>
  );
}
