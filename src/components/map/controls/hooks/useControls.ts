import { useCallback } from "react";

import { useMap } from "@vis.gl/react-google-maps";

const LOCATION_ZOOM = 15;

export function useControls() {
  const map = useMap();

  const handleZoomIn = useCallback(() => {
    if (!map) return;

    const zoom = map.getZoom();
    if (zoom === undefined) return;

    map.setZoom(zoom + 1);
  }, [map]);

  const handleZoomOut = useCallback(() => {
    if (!map) return;

    const zoom = map.getZoom();
    if (zoom === undefined) return;

    map.setZoom(zoom - 1);
  }, [map]);

  const handleLocate = useCallback(() => {
    if (!map || !navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        map.panTo({ lat: coords.latitude, lng: coords.longitude });

        const zoom = map.getZoom();
        if (zoom === undefined || zoom < LOCATION_ZOOM) {
          map.setZoom(LOCATION_ZOOM);
        }
      },
      () => undefined,
      { enableHighAccuracy: true, timeout: 10_000 },
    );
  }, [map]);

  return {
    loaded: map !== null,
    handleZoomIn,
    handleZoomOut,
    handleLocate,
  };
}
