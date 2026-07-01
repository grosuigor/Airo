import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

export function IntercativeShowcase() {
  const [dropdownValue, setDropdownValue] = useState("option-1");

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: 2,
      }}
    >
      <Button variant="contained" color="primary" fullWidth>
        Primary action
      </Button>
      <Button variant="outlined" fullWidth>
        Secondary action
      </Button>
      <FormControl fullWidth>
        <Select
          value={dropdownValue}
          onChange={(event) => setDropdownValue(event.target.value)}
          displayEmpty
        >
          <MenuItem value="option-1">Selected option</MenuItem>
          <MenuItem value="option-2">Another option</MenuItem>
          <MenuItem value="option-3">Third option</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <Select disabled value="option-1">
          <MenuItem value="option-1">Selected option</MenuItem>
          <MenuItem value="option-2">Another option</MenuItem>
          <MenuItem value="option-3">Third option</MenuItem>
        </Select>
      </FormControl>
      <TextField fullWidth placeholder="Type name..." />
      <TextField fullWidth value="name" error helperText={"Please enter a valid value"} />
    </Box>
  );
}
