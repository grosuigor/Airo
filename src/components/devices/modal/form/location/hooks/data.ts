import { CHISINAU } from "@/constants";

export const AUTOCOMPLETE_REQUEST: Partial<google.maps.places.AutocompleteRequest> = {
  includedRegionCodes: ["md"],
  locationRestriction: CHISINAU.bounds,
  language: "ro",
  region: "md",
};
