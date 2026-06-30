"use client";

import { useId, useMemo } from "react";

import { airoColors, type MetricColor } from "@/lib/tokens";

export type { MetricColor };

export function useMetricGradient(color: MetricColor) {
  const id = useId();

  return useMemo(() => {
    const { start, end } = airoColors.marker[color];

    return {
      id: `${id}-${color}`,
      start: start,
      end: end,
    };
  }, [id, color]);
}
