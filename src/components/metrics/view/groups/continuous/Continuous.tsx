import { useMemo } from "react";

import { Chart } from "@/components/charts";

import type { ContinuousProps } from "./types";
import { getContinuousDeviceReadings } from "./utils";

export function Continuous({ device, type }: ContinuousProps) {
  const readings = useMemo(() => getContinuousDeviceReadings(device, type), [device, type]);

  return readings.map(({ values, ...reading }) => {
    return <Chart.Line key={reading.metric} points={values} {...reading} />;
  });
}
