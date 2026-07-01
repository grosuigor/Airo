"use client";

import { useMemo } from "react";

type UseDashArrayParams = {
  radius: number;
  progress: number;
  variant: "ring" | "arc";
};

const ARC_LENGTH = {
  ring: 1,
  arc: 0.75,
};

const CIRCUMFERENCE_RATIO = 2 * Math.PI;

export function useDashArray({ radius, progress, variant }: UseDashArrayParams) {
  return useMemo(() => {
    const circumference = CIRCUMFERENCE_RATIO * radius;
    const arcLength = circumference * ARC_LENGTH[variant];
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
