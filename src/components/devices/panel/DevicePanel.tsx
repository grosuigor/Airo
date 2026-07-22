import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import RouterIcon from "@mui/icons-material/Router";

import { combineSx } from "@/utils";

import { styles } from "./styles";
import type { DevicePanelProps } from "./types";

export function DevicePanel({ name, location, sx, ...props }: DevicePanelProps) {
  return (
    <Stack direction="row" spacing={2.5} sx={combineSx(styles.root, sx)} {...props}>
      <Box sx={styles.iconBox}>
        <RouterIcon sx={styles.icon} fontSize="large" />
      </Box>
      <Stack sx={styles.textContainer}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" sx={styles.location}>
          {location}
        </Typography>
      </Stack>
    </Stack>
  );
}
