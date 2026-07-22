"use client";

import { useMemo, useState } from "react";

import Fade from "@mui/material/Fade";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import { METRICS_VIEW_TABS } from "./data";
import { Empty } from "./empty";
import { Continuous, Individual } from "./groups";
import { styles } from "./styles";
import type { MetricsViewProps, MetricsViewTab } from "./types";

export function MetricsView({ device, columns = 2 }: MetricsViewProps) {
  const theme = useTheme();
  const [tab, setTab] = useState<MetricsViewTab>("hour");

  const isEmpty = useMemo(() => device.metrics.length === 0, [device.metrics]);

  return (
    <Stack sx={styles.root}>
      <Tabs value={tab} onChange={(_, nextTab) => setTab(nextTab)} variant="fullWidth">
        {METRICS_VIEW_TABS.map((chartTab) => (
          <Tab key={chartTab.value} value={chartTab.value} label={chartTab.label} />
        ))}
      </Tabs>

      <Stack sx={styles.panels}>
        {isEmpty && <Empty />}

        {METRICS_VIEW_TABS.map(({ value }) => {
          const active = tab === value;

          return (
            <Fade
              key={value}
              in={active}
              timeout={theme.transitions.duration.shorter}
              unmountOnExit={false}
            >
              <Stack
                sx={{
                  ...styles.panel,
                  gridTemplateColumns: `repeat(${columns}, 1fr)`,
                }}
                data-active={active}
                aria-hidden={!active}
              >
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
