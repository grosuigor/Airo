import { useMemo } from "react";

import { PLOT_BOTTOM } from "../../data";
import { LABEL_COLOR, TICK_FONT_SIZE } from "../data";
import { HorizontalTicksProps } from "./types";

export function HorizontalTicks({ points, mappedPoints }: HorizontalTicksProps) {
  const labeledIndexes = useMemo(
    () => points.flatMap((point, index) => (point.label ? [index] : [])),
    [points],
  );
  const firstLabeledIndex = useMemo(() => labeledIndexes[0], [labeledIndexes]);
  const lastLabeledIndex = useMemo(
    () => labeledIndexes[labeledIndexes.length - 1],
    [labeledIndexes],
  );

  return points.map((point, index) => {
    const x = mappedPoints[index]?.x ?? 0;
    const textAnchor =
      index === firstLabeledIndex ? "start" : index === lastLabeledIndex ? "end" : "middle";

    return (
      <text
        key={`${point.label}-${index}`}
        x={x}
        y={PLOT_BOTTOM + TICK_FONT_SIZE}
        fill={LABEL_COLOR}
        fontSize={TICK_FONT_SIZE}
        textAnchor={textAnchor}
      >
        {point.label}
      </text>
    );
  });
}
