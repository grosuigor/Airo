import type { MetricPoint } from "@/types";

import { PLOT_BOTTOM, PLOT_HEIGHT, PLOT_LEFT, PLOT_WIDTH, Y_TICK_COUNT } from "./data";
import type { Point } from "./types";

export function getYTicks(minValue: number, maxValue: number): number[] {
  const span = Math.max(maxValue - minValue, 1);
  const roughStep = span / (Y_TICK_COUNT - 1);
  const magnitude = 10 ** Math.floor(Math.log10(roughStep));
  const residual = roughStep / magnitude;
  const niceResidual = residual <= 1 ? 1 : residual <= 2 ? 2 : residual <= 5 ? 5 : 10;
  const step = niceResidual * magnitude;

  const start = Math.floor(minValue / step) * step;
  const end = Math.ceil(maxValue / step) * step;
  const ticks: number[] = [];

  for (let value = start; value <= end + step / 2; value += step) {
    ticks.push(Number(value.toFixed(6)));
  }

  return ticks;
}

export function getYDomain(points: MetricPoint[], threshold: number): [number, number] {
  const values = points.map((point) => point.value);
  const dataMin = Math.min(...values, threshold);
  const dataMax = Math.max(...points.map((point) => point.value), threshold);
  const yMin = dataMin >= 0 ? 0 : dataMin;
  const padding = Math.max((dataMax - yMin) * 0.08, 0.5);
  return [yMin, dataMax + padding];
}

export function mapPoints(points: MetricPoint[], yMin: number, yMax: number): Point[] {
  const span = Math.max(yMax - yMin, 1);

  return points.map((point, index) => {
    const x =
      points.length === 1
        ? PLOT_LEFT + PLOT_WIDTH / 2
        : PLOT_LEFT + (index / (points.length - 1)) * PLOT_WIDTH;
    const y = PLOT_BOTTOM - ((point.value - yMin) / span) * PLOT_HEIGHT;

    return { x, y };
  });
}

export function valueToY(value: number, yMin: number, yMax: number): number {
  const span = Math.max(yMax - yMin, 1);

  return PLOT_BOTTOM - ((value - yMin) / span) * PLOT_HEIGHT;
}
