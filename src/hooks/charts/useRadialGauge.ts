"use client";

import { useMemo } from "react";

import { airoChartStroke, type MetricColor } from "@/lib/tokens";

import { useDashArray } from "./useDashArray";
import { useMetricGradient } from "./useMetricGradient";

type UseRadialGaugeParams = {
  size: number;
  progress: number;
  color: MetricColor;
  variant?: "ring" | "arc";
};

export function useRadialGauge({ size, progress, color, variant = "ring" }: UseRadialGaugeParams) {
  const gradient = useMetricGradient(color);

  const center = useMemo(() => size / 2, [size]);
  const radius = useMemo(() => center - airoChartStroke.hover / 2, [center]);

  const dasharray = useDashArray({ radius, progress, variant });

  const [rotation, strokeWidth] = useMemo(() => {
    if (variant === "arc") {
      return [135, airoChartStroke.hover];
    }

    return [-90, airoChartStroke.default];
  }, [variant]);

  return {
    gradient,
    center,
    radius,
    rotation,
    dasharray,
    strokeWidth,
  };
}
