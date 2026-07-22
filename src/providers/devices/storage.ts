import type { DetailedDevice } from "@/types";

export const DEVICES_STORAGE_KEY = "airo.devices";

export function readStoredDevices(): DetailedDevice[] {
  try {
    const raw = window.localStorage.getItem(DEVICES_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as DetailedDevice[]) : [];
  } catch {
    return [];
  }
}

export function writeStoredDevices(devices: DetailedDevice[]) {
  window.localStorage.setItem(DEVICES_STORAGE_KEY, JSON.stringify(devices));
}
