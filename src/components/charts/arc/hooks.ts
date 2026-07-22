"use client";

import { useId, useMemo } from "react";

import { colors, type MetricColor } from "@/lib/tokens";

import { ARC_LENGTH, CIRCUMFERENCE } from "./data";

type UseArcChartParams = {
  progress: number;
  color: MetricColor;
};

export function useArcChart({ progress, color }: UseArcChartParams) {
  const id = useId();

  const gradient = useMemo(() => {
    const { start, end } = colors.marker[color];

    return {
      id: `${id}-${color}`,
      start: start,
      end: end,
    };
  }, [id, color]);

  const dasharray = useMemo(() => {
    const clampedProgress = Math.min(100, Math.max(0, progress));
    const progressLength = ARC_LENGTH * (clampedProgress / 100);

    const trackDasharray = `${ARC_LENGTH} ${CIRCUMFERENCE - ARC_LENGTH}`;
    const progressDasharray = `${progressLength} ${CIRCUMFERENCE - progressLength}`;

    return {
      track: trackDasharray,
      progress: progressDasharray,
    };
  }, [progress]);

  return {
    gradient,
    dasharray,
  };
}
