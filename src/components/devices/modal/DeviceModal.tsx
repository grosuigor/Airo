import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import CloseIcon from "@mui/icons-material/Close";

import { useBackdropContext, useDeviceViewContext } from "@/providers";

import { Form } from "./form";
import { styles } from "./styles";

export function DeviceModal() {
  const { opened, close } = useBackdropContext();
  const { device } = useDeviceViewContext();

  return (
    <Dialog open={opened} onClose={close} sx={styles.root}>
      <Stack sx={styles.content}>
        <Stack direction="row" sx={styles.header}>
          <Typography variant="h4">{device ? `Edit ${device.name}` : "Add New"}</Typography>
          <IconButton onClick={close}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Form />
      </Stack>
    </Dialog>
  );
}
