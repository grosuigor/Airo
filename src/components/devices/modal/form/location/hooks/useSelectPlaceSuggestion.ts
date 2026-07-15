import { useCallback } from "react";

import { useMapsLibrary } from "@vis.gl/react-google-maps";

import type { LocationSelection } from "@/types";

export function useSelectPlaceSuggestion() {
  const placesLib = useMapsLibrary("places");

  return useCallback(
    async (
      suggestion: google.maps.places.AutocompleteSuggestion,
    ): Promise<LocationSelection | null> => {
      if (!placesLib || !suggestion.placePrediction) return null;

      const place = suggestion.placePrediction.toPlace();
      await place.fetchFields({ fields: ["location", "formattedAddress", "displayName"] });

      const lat = place.location?.lat();
      const lng = place.location?.lng();
      if (lat == null || lng == null) return null;

      return {
        location:
          place.formattedAddress || place.displayName || suggestion.placePrediction.text.text,
        coordinates: { latitude: lat, longitude: lng },
      };
    },
    [placesLib],
  );
}
