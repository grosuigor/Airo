import Dialog from "@mui/material/Dialog";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useBackdropContext } from "@/providers";

import { Form } from "./form";
import { styles } from "./styles";

export function DeviceModal() {
  const { opened, close } = useBackdropContext();

  return (
    <Dialog open={opened} onClose={close} sx={styles.root}>
      <Stack sx={styles.content}>
        <Typography variant="h4">Add New</Typography>
        <Form />
      </Stack>
    </Dialog>
  );
}
