"use client";

import { useState } from "react";

import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";

import { styles } from "./styles";

export function Clusterization() {
  const [isVoronoiClusterization, setIsVoronoiClusterization] = useState(false);

  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
      <Typography variant="body1" sx={styles.clusterizationText}>
        Voronoi clusterization
      </Typography>
      <Switch
        checked={isVoronoiClusterization}
        onChange={() => setIsVoronoiClusterization(!isVoronoiClusterization)}
      />
    </Stack>
  );
}
