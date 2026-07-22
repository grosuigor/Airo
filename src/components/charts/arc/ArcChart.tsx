"use client";

import Box from "@mui/material/Box";

import { Chart } from "../Chart";
import { Container } from "./container";
import { CENTER, CIRCLE_TYPES, RADIUS, ROTATION, SIZE, STROKE_WIDTH } from "./data";
import { useArcChart } from "./hooks";
import { styles } from "./styles";
import type { ArcChartProps } from "./types";

export function ArcChart({ progress, color, ...props }: ArcChartProps) {
  const { gradient, dasharray } = useArcChart({
    progress,
    color,
  });

  return (
    <Chart {...props}>
      <Container {...props}>
        <Box
          component="svg"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          sx={styles.svg}
          role="img"
          aria-label="Metric gauge"
        >
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
        </Box>
      </Container>
    </Chart>
  );
}
