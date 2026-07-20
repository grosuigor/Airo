import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { useMetricsModalActions } from "./hooks";
import { styles } from "./styles";

export function Actions() {
  const { unhideAll, hideAll } = useMetricsModalActions();

  return (
    <Stack direction="row" sx={styles.root}>
      <Button variant="outlined" color="primary" onClick={hideAll} sx={styles.actionButton}>
        Hide all
      </Button>
      <Button variant="contained" color="primary" onClick={unhideAll} sx={styles.actionButton}>
        Unhide all
      </Button>
    </Stack>
  );
}
