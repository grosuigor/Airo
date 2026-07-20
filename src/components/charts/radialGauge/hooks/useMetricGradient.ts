"use client";

import { useId, useMemo } from "react";

import { colors, type MetricColor } from "@/lib/tokens";

export function useMetricGradient(color: MetricColor) {
  const id = useId();

  return useMemo(() => {
    const { start, end } = colors.marker[color];

    return {
      id: `${id}-${color}`,
      start: start,
      end: end,
    };
  }, [id, color]);
}
