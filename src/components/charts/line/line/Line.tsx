import { useMemo } from "react";

import { LINE_COLOR, LINE_STROKE_WIDTH } from "./data";
import type { LineProps } from "./types";
import { buildSmoothPath } from "./utils";

export function Line({ mappedPoints }: LineProps) {
  const path = useMemo(() => buildSmoothPath(mappedPoints), [mappedPoints]);

  return (
    <path
      d={path}
      fill="none"
      stroke={LINE_COLOR}
      strokeWidth={LINE_STROKE_WIDTH}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}
