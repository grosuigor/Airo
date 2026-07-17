import Stack from "@mui/material/Stack";

import { BackdropProvider } from "@/providers/backdrop";

import { Address } from "./address";
import { Clusterization } from "./clusterization";

export function Controls() {
  return (
    <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
      <Clusterization />
      <BackdropProvider value={{ id: "deviceModal" }}>
        <Address />
      </BackdropProvider>
    </Stack>
  );
}
