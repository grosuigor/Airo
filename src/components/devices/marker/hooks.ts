import { useEffect, useState } from "react";

import { type AdvancedMarkerRef } from "@vis.gl/react-google-maps";

export function useDeviceMarker() {
  const [marker, setMarker] = useState<AdvancedMarkerRef>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (!marker) return;

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    marker.addEventListener("focus", handleFocus);
    marker.addEventListener("blur", handleBlur);

    return () => {
      marker.removeEventListener("focus", handleFocus);
      marker.removeEventListener("blur", handleBlur);
    };
  }, [marker]);

  return {
    advancedMarkerRef: setMarker,
    eventListeners: {
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
    },
    isActive: isHovered || isFocused,
  };
}
