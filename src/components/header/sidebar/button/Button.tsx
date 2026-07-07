"use client";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PersonIcon from "@mui/icons-material/Person";

import { useSidebarContext } from "../providers";
import { styles } from "./styles";

export function SidebarButton() {
  const { opened, toggle } = useSidebarContext();

  return (
    <Button variant="text" sx={styles.root} onClick={toggle}>
      <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
        <Avatar>
          <PersonIcon />
        </Avatar>
        <Typography variant="body1" sx={{ color: "text.muted" }}>
          Login
        </Typography>
      </Stack>
      <ArrowDropDownIcon
        fontSize="small"
        sx={(theme) => ({
          transition: theme.transitions.create("transform"),
          transform: `rotate(${opened ? "180deg" : "0deg"})`,
        })}
      />
    </Button>
  );
}
