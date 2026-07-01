import { colors } from "@/lib/tokens";

export const PIN_RATIO = 7 / 10;
export const PIN_HEIGHT = 56;
export const PIN_WIDTH = PIN_HEIGHT * PIN_RATIO;

export const CIRCLE_SIZE = 24;
export const CIRCLE_TOP = 8;
export const CIRCLE_LEFT = (PIN_WIDTH - CIRCLE_SIZE) / 2;

export const { gradientStart, gradientEnd } = colors.pin;
