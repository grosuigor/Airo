"use client";

import { APIProvider } from "@vis.gl/react-google-maps";

const mapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;

export function MapProvider({ children }: React.PropsWithChildren) {
  return (
    <APIProvider apiKey={mapsApiKey} region="MD" language="ro">
      {children}
    </APIProvider>
  );
}
