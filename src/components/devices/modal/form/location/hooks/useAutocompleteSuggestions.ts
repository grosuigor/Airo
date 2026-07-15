import { useCallback, useEffect, useRef, useState } from "react";

import { useMapsLibrary } from "@vis.gl/react-google-maps";

import { useDebounced } from "@/hooks";

import { AUTOCOMPLETE_REQUEST } from "./data";
import type { SuggestionOption } from "./types";

const MIN_QUERY_LENGTH = 3;

export function useAutocompleteSuggestions(input: string) {
  const placesLib = useMapsLibrary("places");
  const debouncedInput = useDebounced(input.trim());
  const sessionTokenRef = useRef<google.maps.places.AutocompleteSessionToken | null>(null);
  const [fetchedOptions, setFetchedOptions] = useState<SuggestionOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const shouldSearch = debouncedInput.length >= MIN_QUERY_LENGTH;

  const resetSession = useCallback(() => {
    sessionTokenRef.current = null;
    setFetchedOptions([]);
  }, []);

  useEffect(() => {
    if (!placesLib || !shouldSearch) return;

    const { AutocompleteSessionToken, AutocompleteSuggestion } = placesLib;
    let cancelled = false;

    if (!sessionTokenRef.current) {
      sessionTokenRef.current = new AutocompleteSessionToken();
    }

    const timeoutId = window.setTimeout(() => {
      if (cancelled) return;
      setIsLoading(true);

      void AutocompleteSuggestion.fetchAutocompleteSuggestions({
        ...AUTOCOMPLETE_REQUEST,
        input: debouncedInput,
        sessionToken: sessionTokenRef.current!,
      })
        .then(({ suggestions }) => {
          if (cancelled) return;

          setFetchedOptions(
            suggestions
              .filter((suggestion) => suggestion.placePrediction)
              .map((suggestion, index) => ({
                id: suggestion.placePrediction!.placeId || String(index),
                label: suggestion.placePrediction!.text.text,
                suggestion,
              })),
          );
        })
        .catch(() => {
          if (!cancelled) setFetchedOptions([]);
        })
        .finally(() => {
          if (!cancelled) setIsLoading(false);
        });
    }, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [placesLib, debouncedInput, shouldSearch]);

  return {
    options: shouldSearch ? fetchedOptions : [],
    isLoading: shouldSearch && isLoading,
    resetSession,
  };
}
