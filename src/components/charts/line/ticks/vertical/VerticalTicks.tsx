import { PLOT_LEFT, PLOT_RIGHT } from "../../data";
import { valueToY } from "../../utils";
import { LABEL_COLOR, TICK_FONT_SIZE } from "../data";
import { GRID_COLOR, VERTICAL_TICKS_WIDTH } from "./data";
import type { VerticalTicksProps } from "./types";

export function VerticalTicks({ ticks, yMin, yMax }: VerticalTicksProps) {
  return ticks.map((tick) => {
    const y = valueToY(tick, yMin, yMax);

    return (
      <g key={tick}>
        <line x1={PLOT_LEFT} y1={y} x2={PLOT_RIGHT} y2={y} stroke={GRID_COLOR} strokeWidth={1} />
        <text
          x={VERTICAL_TICKS_WIDTH - TICK_FONT_SIZE / 4}
          y={y}
          fill={LABEL_COLOR}
          fontSize={TICK_FONT_SIZE}
          textAnchor="end"
          dominantBaseline="middle"
        >
          {tick}
        </text>
      </g>
    );
  });
}
