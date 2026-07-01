import InputAdornment from "@mui/material/InputAdornment";

import CancelIcon from "@mui/icons-material/Cancel";

export const textFieldErrorEndAdornment = (
  <InputAdornment position="end" className="field-error-icon">
    <CancelIcon sx={{ fontSize: 18, color: "error.main" }} />
  </InputAdornment>
);
