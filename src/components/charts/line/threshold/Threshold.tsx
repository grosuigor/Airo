import { useMemo } from "react";

import { PLOT_LEFT, PLOT_RIGHT } from "../data";
import { valueToY } from "../utils";
import { THRESHOLD_COLOR, THRESHOLD_STROKE_WIDTH } from "./data";
import type { ThresholdProps } from "./types";

export function Threshold({ threshold, yMin, yMax }: ThresholdProps) {
  const thresholdY = useMemo(() => valueToY(threshold, yMin, yMax), [threshold, yMin, yMax]);

  return (
    <line
      x1={PLOT_LEFT}
      y1={thresholdY}
      x2={PLOT_RIGHT}
      y2={thresholdY}
      stroke={THRESHOLD_COLOR}
      strokeWidth={THRESHOLD_STROKE_WIDTH}
    />
  );
}
