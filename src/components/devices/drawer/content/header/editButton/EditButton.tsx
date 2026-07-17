"use client";

import IconButton from "@mui/material/IconButton";

import EditIcon from "@mui/icons-material/Edit";

import { useBackdropContext } from "@/providers";

export function EditButton() {
  const { open } = useBackdropContext();

  return (
    <IconButton size="small" aria-label="Edit device" onClick={open}>
      <EditIcon fontSize="small" />
    </IconButton>
  );
}
