export const SIZE = 81;
export const STROKE_WIDTH = 10;
export const ROTATION = 135;
export const CENTER = SIZE / 2;
export const RADIUS = CENTER - STROKE_WIDTH / 2;

const ARC_PORTION = 0.75;
const CIRCUMFERENCE_RATIO = 2 * Math.PI;

export const CIRCUMFERENCE = CIRCUMFERENCE_RATIO * RADIUS;
export const ARC_LENGTH = CIRCUMFERENCE * ARC_PORTION;

export const CIRCLE_TYPES = ["track", "progress"] as const;
