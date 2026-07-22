import { DEVICE_METRICS } from "@/constants";
import type { Metric } from "@/types";

export const METRICS_STORAGE_KEY = "airo.metrics";

export function readStoredMetrics(): Metric[] {
  try {
    const raw = window.localStorage.getItem(METRICS_STORAGE_KEY);
    if (!raw) {
      writeStoredMetrics(DEVICE_METRICS);
      return [...DEVICE_METRICS];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Metric[]) : [];
  } catch {
    return [];
  }
}

export function writeStoredMetrics(metrics: Metric[]) {
  window.localStorage.setItem(METRICS_STORAGE_KEY, JSON.stringify(metrics));
}
