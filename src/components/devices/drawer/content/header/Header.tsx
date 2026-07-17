import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { styles } from "./styles";
import type { HeaderProps } from "./types";

export function Header({ device }: HeaderProps) {
  return (
    <Stack sx={styles.root}>
      <Stack direction="row" sx={styles.name}>
        <Typography variant="h4">{device.name}</Typography>
        <IconButton size="small">
          <EditIcon fontSize="small" />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton onClick={close} size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
      </Stack>
      <Stack direction="row" sx={styles.row}>
        <LocationOnIcon fontSize="small" />
        <Typography variant="body1">{device.location}</Typography>
      </Stack>
      <Stack direction="row" sx={styles.row}>
        <EditIcon fontSize="small" />
        <Typography variant="body1">{device.description}</Typography>
      </Stack>
    </Stack>
  );
}
