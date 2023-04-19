import { Settings } from "@mui/icons-material";
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { ItemType } from "../Types";

function Header(props: any) {
  const {items, setItems, handleDeleteAll, checked, setChecked} = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSelectAll = () => {
    const blankArr = (new Array(items.length)).fill(0);
    const itemNamesArr = items.map((item: ItemType) => item.name);
    setChecked([...blankArr, ...itemNamesArr]);
    setAnchorEl(null);
  }
  const handleDeselectAll = () => {
    setChecked([0])
    setAnchorEl(null);
  }
  const handleDeleteAllClose = () => {
    handleDeleteAll();
    setAnchorEl(null);
  }

  return (
    <AppBar position="relative" color="primary" sx={{ bottom: 'auto', top: 0, minHeight: '60px', height: '60px', width: '100vw', maxWidth: '800px'}}>
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <Typography variant="h5">My Shopping List</Typography>
        {items.length !== 0 && <><IconButton
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
          color="inherit"
        >
          <Settings />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleSelectAll}>Select All</MenuItem>
          <MenuItem onClick={handleDeselectAll}>Deselect All</MenuItem>
          <MenuItem onClick={handleDeleteAllClose}>Delete All</MenuItem>
        </Menu></>}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
