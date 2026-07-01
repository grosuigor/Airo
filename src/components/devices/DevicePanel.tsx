import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import RouterIcon from "@mui/icons-material/Router";

type DevicePanelProps = {
  name: string;
  location: string;
};

export function DevicePanel({ name, location }: DevicePanelProps) {
  return (
    <Stack
      direction="row"
      spacing={2.5}
      sx={(theme) => ({
        alignItems: "center",
        p: 1.5,
        bgcolor: "background.paper",
        borderRadius: `${theme.radii.control}px`,
        maxWidth: 351,
      })}
    >
      <Box
        sx={{
          position: "relative",
          width: "3rem",
          height: "3rem",
          borderRadius: "50%",
          bgcolor: "primary.main",
          flexShrink: 0,
        }}
      >
        <RouterIcon
          sx={{
            position: "absolute",
            top: "50%",
            right: "-25%",
            transform: "translateY(-50%)",
          }}
          fontSize="large"
        />
      </Box>
      <Stack sx={{ flex: 1, minWidth: 0 }}>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {location}
        </Typography>
      </Stack>
    </Stack>
  );
}
