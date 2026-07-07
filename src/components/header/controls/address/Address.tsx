"use client";

import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

import { styles } from "./styles";

export function Address() {
  return (
    <TextField
      placeholder="Type address..."
      sx={styles.input}
      fullWidth
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start" sx={styles.inputIcon}>
              <IconButton aria-label="tune" size="small" sx={styles.buttonIcon}>
                <TuneIcon fontSize="inherit" />
              </IconButton>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <SearchIcon sx={styles.searchIcon} />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
