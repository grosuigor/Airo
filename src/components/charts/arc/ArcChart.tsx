"use client";

import { Chart } from "../Chart";
import { Container } from "./container";
import { CENTER, CIRCLE_TYPES, RADIUS, ROTATION, SIZE, STROKE_WIDTH } from "./data";
import { useArcChart } from "./hooks";
import type { ArcChartProps } from "./types";

export function ArcChart({ progress, color, ...props }: ArcChartProps) {
  const { gradient, dasharray } = useArcChart({
    progress,
    color,
  });

  return (
    <Chart {...props}>
      <Container {...props}>
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}>
          <defs>
            <linearGradient
              id={gradient.id}
              x1={CENTER}
              y1={0}
              x2={CENTER}
              y2={SIZE}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor={gradient.start} />
              <stop offset="100%" stopColor={gradient.end} />
            </linearGradient>
          </defs>
          {CIRCLE_TYPES.map((type) => (
            <circle
              key={type}
              className={`radial-gauge-${type}`}
              cx={CENTER}
              cy={CENTER}
              r={RADIUS}
              fill="none"
              stroke={type === "track" ? "#30363D" : `url(#${gradient.id})`}
              strokeWidth={STROKE_WIDTH}
              strokeDasharray={dasharray[type]}
              transform={`rotate(${ROTATION} ${CENTER} ${CENTER})`}
            />
          ))}
        </svg>
      </Container>
    </Chart>
  );
}
