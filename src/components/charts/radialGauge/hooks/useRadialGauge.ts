"use client";

import { useMemo } from "react";

import { chartStroke, type MetricColor } from "@/lib/tokens";

import { useDashArray } from "./useDashArray";
import { useMetricGradient } from "./useMetricGradient";

type UseRadialGaugeParams = {
  size: number;
  progress: number;
  color: MetricColor;
  variant?: "ring" | "arc";
};

const ROTATION = {
  ring: -90,
  arc: 135,
};

const STROKE_WIDTH = {
  ring: chartStroke.default,
  arc: chartStroke.hover,
};

export function useRadialGauge({ size, progress, color, variant = "ring" }: UseRadialGaugeParams) {
  const gradient = useMetricGradient(color);

  const center = useMemo(() => size / 2, [size]);
  const radius = useMemo(() => center - chartStroke.hover / 2, [center]);

  const dasharray = useDashArray({ radius, progress, variant });

  const rotation = useMemo(() => ROTATION[variant], [variant]);
  const strokeWidth = useMemo(() => STROKE_WIDTH[variant], [variant]);

  return {
    gradient,
    center,
    radius,
    rotation,
    dasharray,
    strokeWidth,
  };
}
