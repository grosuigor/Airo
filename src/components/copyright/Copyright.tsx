import Image from "next/image";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { styles } from "./styles";

export function Copyright() {
  return (
    <Stack direction="row" spacing={2} sx={styles.root}>
      <Image src="/copyright.svg" alt="Copyright" width={102} height={19} />
      <Typography variant="body2" sx={{ color: "text.disabled" }}>
        2020 @ All rights reserved.
      </Typography>
    </Stack>
  );
}
