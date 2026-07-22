import { useMemo } from "react";

import { Chart } from "@/components/charts";

import type { IndividualProps } from "./types";
import { getIndividualDeviceReadings } from "./utils";

export function Individual({ device }: IndividualProps) {
  const readings = useMemo(() => getIndividualDeviceReadings(device), [device]);

  return readings.map(({ quality, ...reading }) => {
    return <Chart.Arc key={reading.metric} color={quality} {...reading} />;
  });
}
