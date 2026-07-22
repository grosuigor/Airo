import { LOCATION_MAP_PROPS } from "@/constants";
import type { DeviceCoordinates } from "@/types";

const ORIGIN_COORDINATES = LOCATION_MAP_PROPS.defaultCenter!;
const KILOMETERS_PER_DEGREE = 111.32;

const WAVES = [
  { length: 2.0, angle: 0, amplitude: 0.22, speed: 0.1 },
  { length: 3.1, angle: 37, amplitude: 0.14, speed: -0.07 },
  { length: 5.7, angle: 83, amplitude: 0.09, speed: 0.05 },
  { length: 11.3, angle: 141, amplitude: 0.05, speed: 0.15 },
];

const SHIFT = 0.5;

const MILLISECONDS_PER_HOUR = 3_600_000;

// Random phase offset for each metric channel.
const METRIC_CHANNEL_PHASE = 2.399;

const X_FACTOR = Math.cos((ORIGIN_COORDINATES.lat * Math.PI) / 180);

/**
 * Maps device coordinates to a smoothly oscillating value, based on the time of day.
 *
 * @param coordinates Device latitude and longitude.
 * @param metricIndex Metric channel in the range [0, 5].
 * @returns A deterministic value in the range [0, 1].
 */
export function generatePseudoRandomNumber(
  coordinates: DeviceCoordinates,
  metricIndex = 0,
): number {
  const { latitude, longitude } = coordinates;

  const hours = Math.floor(Date.now() / MILLISECONDS_PER_HOUR);
  const channelPhase = metricIndex * METRIC_CHANNEL_PHASE;

  // Convert coordinates to local kilometers.
  const x = (longitude - ORIGIN_COORDINATES.lng) * KILOMETERS_PER_DEGREE * X_FACTOR;
  const y = (latitude - ORIGIN_COORDINATES.lat) * KILOMETERS_PER_DEGREE;

  return WAVES.reduce((value, wave) => {
    const angle = (wave.angle * Math.PI) / 180;
    const distance = x * Math.cos(angle) + y * Math.sin(angle);

    // Phase changes once per hour and per metric channel.
    const phase = wave.speed * hours + channelPhase;

    return value + wave.amplitude * Math.cos((2 * Math.PI * distance) / wave.length + phase);
  }, SHIFT);
}
