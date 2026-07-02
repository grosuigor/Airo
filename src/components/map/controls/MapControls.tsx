"use client";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import AddIcon from "@mui/icons-material/Add";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import RemoveIcon from "@mui/icons-material/Remove";

import { useControls } from "./hooks";
import { styles } from "./styles";

export function MapControls() {
  const { loaded, handleZoomIn, handleZoomOut, handleLocate } = useControls();

  if (!loaded) return null;

  return (
    <Stack spacing={2} sx={styles.root}>
      <Stack spacing={0.5}>
        <IconButton aria-label="Zoom in" onClick={handleZoomIn} sx={styles.control}>
          <AddIcon />
        </IconButton>
        <IconButton aria-label="Zoom out" onClick={handleZoomOut} sx={styles.control}>
          <RemoveIcon />
        </IconButton>
      </Stack>
      <IconButton aria-label="My location" onClick={handleLocate} sx={styles.control}>
        <MyLocationIcon />
      </IconButton>
    </Stack>
  );
}
