export type AutocompleteSuggestion = google.maps.places.AutocompleteSuggestion;

export type AutocompleteRequest = Partial<google.maps.places.AutocompleteRequest>;

export type AutocompleteSessionToken = google.maps.places.AutocompleteSessionToken;

export type Geocoder = google.maps.Geocoder;

export type SuggestionOption = {
  id: string;
  label: string;
  suggestion: AutocompleteSuggestion;
};
