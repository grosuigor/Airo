"use client";

import { useState } from "react";

import Fade from "@mui/material/Fade";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import { CHART_TABS } from "./data";
import { Continuous, Individual } from "./groups";
import { styles } from "./styles";
import type { ChartsProps, ChartTab } from "./types";

export function Charts({ device }: ChartsProps) {
  const theme = useTheme();
  const [tab, setTab] = useState<ChartTab>("hour");

  return (
    <Stack sx={styles.root}>
      <Tabs value={tab} onChange={(_, nextTab) => setTab(nextTab)} variant="fullWidth">
        {CHART_TABS.map((chartTab) => (
          <Tab key={chartTab.value} value={chartTab.value} label={chartTab.label} />
        ))}
      </Tabs>

      <Stack sx={styles.panels}>
        {CHART_TABS.map(({ value }) => {
          const active = tab === value;

          return (
            <Fade
              key={value}
              in={active}
              timeout={theme.transitions.duration.shorter}
              unmountOnExit={false}
            >
              <Stack sx={styles.panel} data-active={active} aria-hidden={!active}>
                {value === "hour" ? (
                  <Individual device={device} />
                ) : (
                  <Continuous device={device} type={value} />
                )}
              </Stack>
            </Fade>
          );
        })}
      </Stack>
    </Stack>
  );
}
