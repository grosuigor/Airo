"use client";

import Autocomplete from "@mui/material/Autocomplete";

import { useAddressField } from "./hooks";
import { Input } from "./input";
import { Option } from "./option";
import { PaperComponent } from "./paper";
import { styles } from "./styles";

export function Address() {
  const autoCompleteConfig = useAddressField();

  return (
    <Autocomplete
      {...autoCompleteConfig}
      sx={styles.input}
      fullWidth
      openOnFocus={false}
      forcePopupIcon={false}
      getOptionLabel={(device) => device.location}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      noOptionsText="No devices found"
      slots={{ paper: PaperComponent }}
      renderOption={(props, device) => {
        const { key, ...rest } = props;
        return <Option device={device} key={key} {...rest} />;
      }}
      renderInput={(params) => <Input {...params} />}
    />
  );
}
