import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import DeleteIcon from "@mui/icons-material/Delete";

import { Header } from "./header";
import { useDeviceRemoveButton } from "./hooks";
import { styles } from "./styles";
import type { ContentProps } from "./types";

export function Content({ device }: ContentProps) {
  const handleRemove = useDeviceRemoveButton(device.id);

  return (
    <Stack sx={styles.root}>
      <Header device={device} />
      <Button
        variant="text"
        startIcon={<DeleteIcon />}
        sx={styles.removeButton}
        onClick={handleRemove}
      >
        <Typography variant="body1">Remove Device</Typography>
      </Button>
    </Stack>
  );
}
