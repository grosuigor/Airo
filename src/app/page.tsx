import Stack from "@mui/material/Stack";

import { Copyright, Header, MapView } from "@/components";

export default function Page() {
  return (
    <Stack>
      <Header />
      <MapView />
      <Copyright />
    </Stack>
  );
}
