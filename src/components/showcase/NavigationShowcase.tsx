"use client";

import { useState } from "react";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

import { DevicePanel } from "@/components/devices";

export function NavigationShowcase() {
  const [tab, setTab] = useState("hour");

  return (
    <Stack spacing={6} sx={{ height: "100%" }}>
      <Button
        variant="text"
        startIcon={<ChevronLeftIcon fontSize="large" />}
        size="large"
        sx={{ px: 0, minHeight: "unset", color: "text.primary", alignSelf: "flex-start" }}
      >
        <Typography variant="h4">My Devices</Typography>
      </Button>

      <Stack direction="row" spacing={1} sx={{ alignItems: "center", maxWidth: 351 }}>
        <TextField
          placeholder="Type address..."
          sx={(theme) => ({
            "& .MuiInputBase-root": {
              borderRadius: theme.airo.radii.pill,
            },
          })}
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start" sx={{ pointerEvents: "auto", mr: 0 }}>
                  <IconButton
                    aria-label="tune"
                    size="small"
                    sx={{
                      color: "text.primary",
                      fontSize: 18,
                      "&:hover, &.Mui-focusVisible, &.Mui-focused": {
                        color: "var(--mui-iconButton-hoverBg)",
                      },
                    }}
                  >
                    <TuneIcon fontSize="inherit" />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon sx={{ color: "text.secondary", fontSize: 18 }} />
                </InputAdornment>
              ),
            },
          }}
        />
        <IconButton
          aria-label="my location"
          size="small"
          sx={{ color: "text.primary", fontSize: 22, flexShrink: 0 }}
        >
          <MyLocationIcon sx={{ fontSize: "inherit" }} />
        </IconButton>
      </Stack>

      <DevicePanel name="Home station" location="CA, 31st street, 4" />

      <Tabs
        value={tab}
        onChange={(_, nextValue) => setTab(nextValue)}
        variant="fullWidth"
        sx={{ mt: "auto", maxWidth: 351 }}
      >
        <Tab value="hour" label="Hour" />
        <Tab value="today" label="Today" />
        <Tab value="week" label="Week" />
      </Tabs>
    </Stack>
  );
}
