import { type SyntheticEvent, useCallback, useState } from "react";

import { EMPTY_COORDINATES } from "@/constants";
import type { Place } from "@/types";

import { useAutocompleteSuggestions, useSelectPlaceSuggestion } from "../common";
import type { SuggestionOption } from "./types";

const MIN_QUERY_LENGTH = 3;

type onLocationChangeFn = (selection: Place) => void;

export function useLocationField(onLocationChange: onLocationChangeFn) {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { options, isLoading, resetSession } = useAutocompleteSuggestions(searchQuery);
  const selectSuggestion = useSelectPlaceSuggestion();

  const stopSuggesting = useCallback(() => {
    setOpen(false);
    setSearchQuery("");
    resetSession();
    queueMicrotask(() => {
      (document.activeElement as HTMLElement | null)?.blur();
    });
  }, [setOpen, resetSession]);

  const handleInputChange = useCallback(
    (_: SyntheticEvent, value: string, reason: string) => {
      if (reason === "input") {
        setSearchQuery(value);
        setOpen(value.trim().length > 0);
        onLocationChange({ location: value, coordinates: EMPTY_COORDINATES });
        return;
      }

      if (reason === "clear") {
        setSearchQuery("");
        setOpen(false);
        resetSession();
        onLocationChange({ location: "", coordinates: EMPTY_COORDINATES });
      }
    },
    [setOpen, onLocationChange, resetSession],
  );

  const handleOptionSelect = useCallback(
    async (_: SyntheticEvent, option: SuggestionOption | string | null) => {
      if (!option || typeof option === "string") return;

      const selection = await selectSuggestion(option.suggestion);
      if (!selection) return;

      onLocationChange(selection);
      stopSuggesting();
    },
    [selectSuggestion, onLocationChange, stopSuggesting],
  );

  const handlePickerConfirm = useCallback(
    (selection: Place) => {
      onLocationChange(selection);
      stopSuggesting();
    },
    [onLocationChange, stopSuggesting],
  );

  const getOptionLabel = useCallback((option: SuggestionOption | string) => {
    return typeof option === "string" ? option : option.label;
  }, []);

  const isOptionEqualToValue = useCallback(
    (option: SuggestionOption, value: SuggestionOption | string) => {
      return typeof value === "string" ? option.label === value : option.id === value.id;
    },
    [],
  );

  const noOptionsText =
    searchQuery.trim().length < MIN_QUERY_LENGTH
      ? `Search should be at least ${MIN_QUERY_LENGTH} characters`
      : "No addresses found";

  return {
    autocompleteOptions: {
      options: options,
      open: open,
      onClose: () => setOpen(false),
      onInputChange: handleInputChange,
      onChange: handleOptionSelect,
      loading: isLoading,
      getOptionLabel,
      isOptionEqualToValue,
      noOptionsText,
    },
    handlePickerConfirm,
  };
}
