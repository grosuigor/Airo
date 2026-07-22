import { DetailedDevice } from "@/types";

export function filterOptions(query: string, devices: DetailedDevice[]) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return devices;

  return devices.filter(
    ({ name, location }) =>
      name.toLowerCase().includes(normalized) || location.toLowerCase().includes(normalized),
  );
}
