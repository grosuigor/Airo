"use client";

import { useMemo } from "react";

import { useRadialGauge } from "@/hooks";
import { chartSizes, type MetricColor } from "@/lib/tokens";

export type RadialGaugeProps = {
  progress: number;
  color: MetricColor;
  variant: "ring" | "arc";
};

const circleTypes = ["track", "progress"] as const;

export function RadialGauge({ progress, color, variant }: RadialGaugeProps) {
  const size = useMemo(() => {
    return chartSizes[variant];
  }, [variant]);

  const { gradient, strokeWidth, center, radius, dasharray, rotation } = useRadialGauge({
    size,
    progress,
    color,
    variant,
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <defs>
        <linearGradient
          id={gradient.id}
          x1={center}
          y1={0}
          x2={center}
          y2={size}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={gradient.start} />
          <stop offset="100%" stopColor={gradient.end} />
        </linearGradient>
      </defs>
      {circleTypes.map((type) => (
        <circle
          key={type}
          className={`radial-gauge-${type}`}
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={type === "track" ? "#30363D" : `url(#${gradient.id})`}
          strokeWidth={strokeWidth}
          strokeDasharray={dasharray[type]}
          transform={`rotate(${rotation} ${center} ${center})`}
        />
      ))}
    </svg>
  );
}
