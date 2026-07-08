import { useMemo } from "react";

import { useAuthContext } from "@/providers";

export function useUserInfo() {
  const { user, loading } = useAuthContext();

  const { name, username, avatarSrc, fallbackInitial } = useMemo(() => {
    if (user === null) {
      return {
        name: loading ? "..." : "Login",
        username: undefined,
        avatarSrc: undefined,
        fallbackInitial: undefined,
      };
    }

    return {
      name: user.displayName ?? undefined,
      username: user.email?.split("@")[0] ?? undefined,
      avatarSrc: user.photoURL ?? undefined,
      fallbackInitial: user.displayName?.[0]?.toUpperCase(),
    };
  }, [user, loading]);

  return { name, username, avatarSrc, fallbackInitial };
}
