/** Outer hit/layout box (unchanged). */
export const MARKER_BORDER = 5;
export const MARKER_BOX_SIZE = 16;

/** Ring SVG — slightly larger than the content box so it fills more of the marker. */
export const MARKER_SIZE = 20;
export const MARKER_STROKE = 6;
export const MARKER_CENTER = MARKER_SIZE / 2;
export const MARKER_OUTER_RADIUS = MARKER_SIZE / 2;
export const MARKER_INNER_RADIUS = MARKER_OUTER_RADIUS - MARKER_STROKE;

/** Offset to center the ring inside the content box (may be negative). */
export const MARKER_RING_OFFSET = (MARKER_BOX_SIZE - MARKER_SIZE) / 2;

/** Filled annular ring (evenodd): outer edge flush with the SVG bounds. */
export const MARKER_RING_PATH = [
  `M ${MARKER_CENTER - MARKER_OUTER_RADIUS} ${MARKER_CENTER}`,
  `a ${MARKER_OUTER_RADIUS} ${MARKER_OUTER_RADIUS} 0 1 0 ${MARKER_OUTER_RADIUS * 2} 0`,
  `a ${MARKER_OUTER_RADIUS} ${MARKER_OUTER_RADIUS} 0 1 0 ${-MARKER_OUTER_RADIUS * 2} 0`,
  `M ${MARKER_CENTER - MARKER_INNER_RADIUS} ${MARKER_CENTER}`,
  `a ${MARKER_INNER_RADIUS} ${MARKER_INNER_RADIUS} 0 1 1 ${MARKER_INNER_RADIUS * 2} 0`,
  `a ${MARKER_INNER_RADIUS} ${MARKER_INNER_RADIUS} 0 1 1 ${-MARKER_INNER_RADIUS * 2} 0`,
].join(" ");
