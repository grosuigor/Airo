"use client";

import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

import { useAuthContext } from "@/providers";

import { AuthContent } from "./auth";
import { styles } from "./styles";
import { UserContent } from "./user";

export function SidebarContent() {
  const { user, loading, signOut } = useAuthContext();

  if (loading) {
    return (
      <Stack sx={styles.root}>
        <CircularProgress size={100} />
      </Stack>
    );
  }

  if (user) {
    return <UserContent user={user} signOut={signOut} />;
  }

  return <AuthContent />;
}
