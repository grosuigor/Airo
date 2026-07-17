import Stack from "@mui/material/Stack";

import { Copyright, DeviceDrawer, Header, MapView } from "@/components";

export default function Page() {
  return (
    <Stack>
      <Header />
      <MapView />
      <DeviceDrawer />
      <Copyright />
    </Stack>
  );
}
