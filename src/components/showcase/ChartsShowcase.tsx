import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { ArcChart, RingChart } from "@/components/charts";
import type { MetricColor } from "@/lib/tokens";

const ringChartMetrics: {
  label: string;
  value: string;
  progress: number;
  color: MetricColor;
}[] = [
  { label: "PM2-5", value: "7.8", progress: 78, color: "green" },
  { label: "CO2", value: "695.5", progress: 28, color: "orange" },
  {
    label: "Temperature",
    value: "9°C",
    progress: 42,
    color: "orange",
  },
  {
    label: "Humidity",
    value: "12%",
    progress: 22,
    color: "green",
  },
];

export function ChartsShowcase() {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      sx={{ flexWrap: "wrap", alignItems: "flex-start" }}
    >
      <ArcChart
        title="PM2.5"
        subtitle="Normal range: 1-9"
        value="7.8"
        progress={78}
        color="green"
      />
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

        <Stack direction="row" spacing={2}>
          {ringChartMetrics.map((metric) => (
            <RingChart key={metric.label} {...metric} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
