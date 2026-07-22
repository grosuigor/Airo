import type { Device, MetricReadings } from "@/types";
import { getDeviceReadings } from "@/utils";

import { formatDayLabel, formatHourLabel } from "./formatters";

const MILLISECONDS_PER_HOUR = 3_600_000;

function fillDeviceReadingsForToday(device: Device): Record<string, MetricReadings> {
  const labeledReadings: Record<string, MetricReadings> = {};

  const endHour = Math.floor(Date.now() / MILLISECONDS_PER_HOUR);

  for (let offset = 23; offset >= 0; offset -= 1) {
    const atMs = (endHour - offset) * MILLISECONDS_PER_HOUR;
    const hour = new Date(atMs).getHours();
    const label = formatHourLabel(hour);

    if (label === undefined) {
      continue;
    }

    labeledReadings[label] = getDeviceReadings(device, atMs);
  }

  return labeledReadings;
}

function fillDeviceReadingsForWeek(device: Device): Record<string, MetricReadings> {
  const labeledReadings: Record<string, MetricReadings> = {};

  const todayNoon = new Date();
  todayNoon.setHours(12, 0, 0, 0);

  for (let offset = 6; offset >= 0; offset -= 1) {
    const day = new Date(todayNoon);
    day.setDate(todayNoon.getDate() - offset);
    const label = formatDayLabel(day);

    labeledReadings[label] = getDeviceReadings(device, day.getTime());
  }

  return labeledReadings;
}

export function getDeviceReadingsFiller(
  type: "today" | "week",
): (device: Device) => Record<string, MetricReadings> {
  switch (type) {
    case "today":
      return fillDeviceReadingsForToday;
    case "week":
      return fillDeviceReadingsForWeek;
  }
}
