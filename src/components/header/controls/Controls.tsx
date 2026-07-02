"use client";

import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

import { styles } from "./styles";

export function Controls() {
  const [isVoronoiClusterization, setIsVoronoiClusterization] = useState(false);

  return (
    <Stack direction="row" spacing={2} sx={styles.root}>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <Typography variant="body1" sx={styles.clusterizationText}>
          Voronoi clusterization
        </Typography>
        <Switch
          checked={isVoronoiClusterization}
          onChange={() => setIsVoronoiClusterization(!isVoronoiClusterization)}
        />
      </Stack>
      <TextField
        placeholder="Type address..."
        sx={styles.settingsInput}
        fullWidth
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start" sx={styles.settingsInputIcon}>
                <IconButton aria-label="tune" size="small" sx={styles.settingsButtonIcon}>
                  <TuneIcon fontSize="inherit" />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon sx={styles.settingsSearchIcon} />
              </InputAdornment>
            ),
          },
        }}
      />
    </Stack>
  );
}
