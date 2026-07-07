import type { MapProps } from "@vis.gl/react-google-maps";

const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID!;

export const MAP_PROPS: MapProps = {
  defaultCenter: { lat: 47.029839114464394, lng: 28.826235866221495 },
  defaultZoom: 15,
  gestureHandling: "greedy",
  colorScheme: "DARK",
  mapId: mapId,
  disableDefaultUI: true,
};
