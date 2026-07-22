import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { buttonConfig } from "./config";
import { useMetricsModalActions } from "./hooks";
import { styles } from "./styles";

export function Actions() {
  const callbacks = useMetricsModalActions();

  return (
    <Stack direction="row" sx={styles.root}>
      {buttonConfig.map((button) => (
        <Button
          key={button.action}
          variant={button.variant}
          color="primary"
          onClick={callbacks[button.action]}
          sx={styles.actionButton}
        >
          {button.label}
        </Button>
      ))}
    </Stack>
  );
}
