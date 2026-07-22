import { useCallback, useMemo, useState } from "react";

export function useMenu() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isMenuOpen = useMemo(() => Boolean(anchorEl), [anchorEl]);

  const openMenu = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const closeMenu = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return { anchorEl, isMenuOpen, openMenu, closeMenu };
}
