import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Chart } from "@/components/charts";

export function ChartsShowcase() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      sx={{ flexWrap: "wrap", alignItems: "flex-start" }}
    >
      <Chart.Arc metric="pm25" value={7.8} progress={78} color="green" />
      <Stack
        spacing={2}
        sx={(theme) => ({
          p: 2.5,
          borderRadius: `${theme.radii.card}px`,
          bgcolor: theme.palette.background.paper,
          boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.25)",
        })}
      >
        <Typography variant="titleMd">Air Conditioner</Typography>
      </Stack>
    </Stack>
  );
}
