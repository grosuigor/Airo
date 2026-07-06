import Stack from "@mui/material/Stack";

import { Address } from "./address";
import { Clusterization } from "./clusterization";

export function Controls() {
  return (
    <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
      <Clusterization />
      <Address />
    </Stack>
  );
}
