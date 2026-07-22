import type { SxProps, Theme } from "@mui/material/styles";

export function combineSx(ownSx: SxProps<Theme>, propsSx: SxProps<Theme> | undefined) {
  return [ownSx, ...(propsSx ? (Array.isArray(propsSx) ? propsSx : [propsSx]) : [])];
}
