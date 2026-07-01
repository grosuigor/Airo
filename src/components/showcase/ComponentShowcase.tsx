"use client";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { ChartsShowcase } from "./ChartsShowcase";
import { IntercativeShowcase } from "./IntercativeShowcase";
import { LogoAndIconsShowcase } from "./LogoAndIconsShowcase";
import { NavigationShowcase } from "./NavigationShowcase";

const components = [
  {
    title: "Navigation",
    component: <NavigationShowcase />,
  },
  {
    title: "Logo and Icons",
    component: <LogoAndIconsShowcase />,
  },
  {
    title: "Interactive",
    component: <IntercativeShowcase />,
  },
  {
    title: "Charts",
    component: <ChartsShowcase />,
  },
];

export function ComponentShowcase() {
  return (
    <Stack
      spacing={3}
      sx={{
        minHeight: "100vh",
        bgcolor: "background.paper",
        p: { xs: 2, md: 4 },
      }}
    >
      <Typography variant="h4">Airo UI Kit</Typography>

      <Grid container spacing={6}>
        {components.map(({ title, component }) => (
          <Grid size={{ sm: 12, lg: 6 }} key={title}>
            <Stack
              spacing={6}
              sx={(theme) => ({
                minWidth: 0,
                bgcolor: "background.default",
                borderRadius: `${theme.radii.panel}px`,
                p: 2.5,
                height: "100%",
              })}
            >
              <Typography variant="h4">{title}</Typography>
              {component}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
