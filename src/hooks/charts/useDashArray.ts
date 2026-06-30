"use client";

import { useMemo } from "react";

type UseDashArrayParams = {
  radius: number;
  progress: number;
  variant?: "ring" | "arc";
};

export function useDashArray({ radius, progress, variant = "ring" }: UseDashArrayParams) {
  return useMemo(() => {
    const circumference = 2 * Math.PI * radius;
    const arcLength = circumference * (variant === "arc" ? 0.75 : 1);
    const clampedProgress = Math.min(100, Math.max(0, progress));
    const progressLength = arcLength * (clampedProgress / 100);

    const trackDasharray =
      variant === "arc"
        ? `${arcLength} ${circumference - arcLength}`
        : `${circumference} ${circumference}`;
    const progressDasharray = `${progressLength} ${circumference - progressLength}`;

    return {
      track: trackDasharray,
      progress: progressDasharray,
    };
  }, [radius, progress, variant]);
}
