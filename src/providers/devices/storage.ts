import type { Device } from "@/types";

export const DEVICES_STORAGE_KEY = "airo.devices";

export function readStoredDevices(): Device[] {
  try {
    const raw = window.localStorage.getItem(DEVICES_STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Device[]) : [];
  } catch {
    return [];
  }
}

export function writeStoredDevices(devices: Device[]) {
  window.localStorage.setItem(DEVICES_STORAGE_KEY, JSON.stringify(devices));
}
