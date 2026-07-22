import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { useChartVisibilty, useMenu, useModal } from "./hooks";
import { styles } from "./styles";
import type { ChartMenuProps } from "./types";

export function ChartMenu({ metric }: ChartMenuProps) {
  const { isModalOpened, toggleModal } = useModal();
  const { anchorEl, isMenuOpen, openMenu, closeMenu } = useMenu();
  const { isHidden, toggleVisibility } = useChartVisibilty(metric);

  const handleToggleVisibility = () => {
    toggleVisibility();
    closeMenu();
  };

  const handleToggleModal = () => {
    toggleModal();
    closeMenu();
  };

  return (
    <>
      <IconButton
        size="small"
        aria-label="More options"
        aria-haspopup="menu"
        aria-expanded={isMenuOpen ? "true" : undefined}
        aria-controls={isMenuOpen ? `chart-menu-${metric}` : undefined}
        sx={styles.dots}
        onClick={openMenu}
      >
        <MoreHorizIcon fontSize="small" />
      </IconButton>

      <Menu
        id={`chart-menu-${metric}`}
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={closeMenu}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleToggleVisibility}>{isHidden ? "Unhide" : "Hide"}</MenuItem>
        <MenuItem onClick={handleToggleModal}>{isModalOpened ? "Minify" : "Expand"}</MenuItem>
      </Menu>
    </>
  );
}
