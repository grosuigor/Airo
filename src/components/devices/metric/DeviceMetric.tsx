import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { combineSx } from "@/utils";

import { styles } from "./styles";
import type { DeviceMetricProps } from "./types";

export function DeviceMetric({ label, value, sx, ...props }: DeviceMetricProps) {
  return (
    <Stack direction="row" spacing={2} sx={combineSx(styles.root, sx)} {...props}>
      <Typography variant="body1">{label}</Typography>
      <Typography variant="body1">{value}</Typography>
    </Stack>
  );
}
