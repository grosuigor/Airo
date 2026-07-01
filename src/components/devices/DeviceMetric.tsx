import Stack from "@mui/material/Stack";
import { type SxProps, type Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { colors } from "@/lib/tokens";

type DeviceMetricProps = {
  label: string;
  value: string;
  sx?: SxProps<Theme>;
};

export function DeviceMetric({ label, value, sx }: DeviceMetricProps) {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={[
        (theme) => ({
          border: "1.5px solid transparent",
          borderRadius: `${theme.radii.card}px`,
          background: `
            linear-gradient(${theme.palette.background.default}, ${theme.palette.background.default}) padding-box,
            linear-gradient(135deg, ${colors.pin.gradientStart} 0%, ${colors.pin.gradientEnd} 100%) border-box
          `,
          p: 1,
        }),
        ...(sx ? (Array.isArray(sx) ? sx : [sx]) : []),
      ]}
    >
      <Typography variant="body1">{label}</Typography>
      <Typography variant="body1">{value}</Typography>
    </Stack>
  );
}
