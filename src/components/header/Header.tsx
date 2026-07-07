import Image from "next/image";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Controls } from "./controls";
import { Profile } from "./profile";
import { styles } from "./styles";

export function Header() {
  return (
    <Stack direction="row" sx={styles.root}>
      <Stack direction="row" spacing={0.5} sx={styles.logoContainer}>
        <Image src="/logo.svg" alt="Logo" width={132} height={32} />
        <Typography variant="body2" sx={{ color: "text.disabled" }}>
          by Grid Dynamics
        </Typography>
      </Stack>
      <Controls />
      <Profile />
    </Stack>
  );
}
