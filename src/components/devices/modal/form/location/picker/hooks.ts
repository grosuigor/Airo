import { useCallback, useEffect, useMemo, useState } from "react";

import { type MapMouseEvent } from "@vis.gl/react-google-maps";

import { Coordinates, Place } from "@/types";
import { hasValidCoordinates } from "@/utils";

import { useReverseGeocode } from "../common";
import { createInitialDraft } from "./utils";

type onConfirmFn = (selection: Place) => void;
type onCloseFn = () => void;

export function useLocationPicker(
  coordinates: Coordinates,
  onConfirm: onConfirmFn,
  onClose: onCloseFn,
) {
  const reverseGeocode = useReverseGeocode();
  const [draft, setDraft] = useState<Place | null>(() => createInitialDraft(coordinates));

  useEffect(() => {
    if (!hasValidCoordinates(coordinates)) return;

    let cancelled = false;
    void reverseGeocode(coordinates).then((selection) => {
      if (!cancelled && selection) setDraft(selection);
    });

    return () => {
      cancelled = true;
    };
  }, [coordinates, reverseGeocode]);

  const handleMapClick = useCallback(
    async (event: MapMouseEvent) => {
      const latLng = event.detail.latLng;
      if (!latLng) return;

      const nextCoordinates: Coordinates = {
        latitude: latLng.lat,
        longitude: latLng.lng,
      };

      setDraft({ location: "", coordinates: nextCoordinates });
      const selection = await reverseGeocode(nextCoordinates);
      if (selection) setDraft(selection);
    },
    [reverseGeocode],
  );

  const handleConfirm = useCallback(() => {
    if (!draft || !hasValidCoordinates(draft.coordinates)) return;
    onConfirm({
      location:
        draft.location ||
        `${draft.coordinates.latitude.toFixed(5)}, ${draft.coordinates.longitude.toFixed(5)}`,
      coordinates: draft.coordinates,
    });
    onClose();
  }, [draft, onConfirm, onClose]);

  const location = useMemo(() => {
    if (!draft) return null;
    return draft.location;
  }, [draft]);

  const markerPosition = useMemo(
    () => (draft ? { lat: draft.coordinates.latitude, lng: draft.coordinates.longitude } : null),
    [draft],
  );

  return { markerPosition, location, handleMapClick, handleConfirm };
}
