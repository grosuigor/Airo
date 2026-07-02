"use client";

import Box from "@mui/material/Box";

import { Map } from "@vis.gl/react-google-maps";

import { MapControls } from "../controls";
import { MAP_PROPS } from "./data";
import { styles } from "./styles";

export function MapView() {
  return (
    <Box sx={styles.root}>
      <Map {...MAP_PROPS} style={{ height: "100%", width: "100%" }}>
        <MapControls />
      </Map>
    </Box>
  );
}
