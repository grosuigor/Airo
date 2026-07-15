"use client";

import Box from "@mui/material/Box";

import { Map } from "@vis.gl/react-google-maps";

import { generateMapConfig } from "@/utils";

import { MapControls } from "../controls";
import { styles } from "./styles";

const MAP_CONFIG = generateMapConfig("MAIN");

export function MapView() {
  return (
    <Box sx={styles.root}>
      <Map {...MAP_CONFIG} style={{ height: "100%", width: "100%" }}>
        <MapControls />
      </Map>
    </Box>
  );
}
