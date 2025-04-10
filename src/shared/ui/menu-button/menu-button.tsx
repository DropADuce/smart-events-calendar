"use client";

import { MouseEvent, ReactElement } from "react";
import { useState } from "react";
import { Button, Menu, MenuItem, Typography } from "@mui/material";

interface IMenuButtonProps {
  title: string;
  menuItems: Array<ReactElement>;
}

export const MenuButton = ({ title, menuItems }: IMenuButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isOpen = !!anchorEl;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="dropdown-button"
        aria-controls={isOpen ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isOpen ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
      >
        <Typography variant="button">{title}</Typography>
      </Button>

      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "dropdown-button",
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={`menu-item-${index}`}>{item}</MenuItem>
        ))}
      </Menu>
    </div>
  );
};
