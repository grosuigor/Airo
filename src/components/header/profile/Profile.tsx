import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

import { styles } from "./styles";

export function Profile() {
  return (
    <Stack direction="row" spacing={1.5} sx={styles.root}>
      <IconButton aria-label="show new notifications" size="small">
        <Badge variant="dot">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Button variant="text" sx={styles.button}>
        <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
          <Avatar>
            <PersonIcon />
          </Avatar>
          <Typography variant="body1" sx={{ color: "text.muted" }}>
            Login
          </Typography>
        </Stack>
        <ArrowDropDownIcon fontSize="small" />
      </Button>
    </Stack>
  );
}
