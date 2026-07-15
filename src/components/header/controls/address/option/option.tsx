import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { styles } from "./styles";
import type { OptionProps } from "./types";

export function Option({ device, ...optionProps }: OptionProps) {
  return (
    <Stack component="li" direction="row" {...optionProps} sx={styles.option}>
      <Typography variant="h6">{device.name}</Typography>
      <Typography variant="body1" color="text.secondary">
        {device.location}
      </Typography>
    </Stack>
  );
}
