"use client";

import Box from "@mui/material/Box";

import { Map } from "@vis.gl/react-google-maps";

import { DeviceMarker } from "@/components/devices";
import { useDevicesContext, useDeviceViewContext } from "@/providers";
import { generateMapConfig } from "@/utils";

import { MapControls } from "../controls";
import { useMapReady } from "./hooks";
import { styles } from "./styles";

const mapConfig = generateMapConfig("MAIN");

export function MapView() {
  const { devices } = useDevicesContext();
  const { inspect } = useDeviceViewContext();
  const { ready, onTilesLoaded, onIdle } = useMapReady();

  return (
    <Box sx={styles.root}>
      <Map
        {...mapConfig}
        style={{ height: "100%", width: "100%" }}
        onTilesLoaded={onTilesLoaded}
        onIdle={onIdle}
      >
        {ready &&
          devices.map((device) => (
            <DeviceMarker
              key={device.id}
              aria-label={`${device.name} marker`}
              device={device}
              onClick={() => inspect(device.id)}
            />
          ))}
        <MapControls />
      </Map>
    </Box>
  );
}
