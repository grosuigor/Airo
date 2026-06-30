"use client";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { airoChartSizes, type MetricColor } from "@/lib/tokens";

import { RadialGauge } from "./RadialGauge";

export type MetricArcChartProps = {
  title: string;
  subtitle: string;
  value: string;
  progress: number;
  color: MetricColor;
};

export function MetricArcChart({ title, subtitle, value, progress, color }: MetricArcChartProps) {
  return (
    <Box
      sx={(theme) => ({
        position: "relative",
        width: 154,
        height: 154,
        p: 2,
        borderRadius: "3px",
        bgcolor: theme.palette.airo.elevated,
        boxShadow: "0px 14.6px 19.5px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <IconButton
        size="small"
        aria-label="More options"
        sx={{
          position: "absolute",
          top: 4,
          right: 4,
          color: "text.primary",
          p: 0.5,
        }}
      >
        <MoreHorizIcon fontSize="small" />
      </IconButton>

      <Typography variant="titleSm">{title}</Typography>
      <Typography variant="caption" sx={{ color: "text.primary", opacity: 0.7, mt: 0.5, mb: 1.5 }}>
        {subtitle}
      </Typography>

      <Box
        sx={{
          position: "relative",
          width: airoChartSizes.arc,
          height: airoChartSizes.arc,
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box sx={{ position: "absolute", inset: 0 }}>
          <RadialGauge progress={progress} color={color} variant="arc" />
        </Box>
        <Typography variant="chartValue">{value}</Typography>
      </Box>
    </Box>
  );
}
