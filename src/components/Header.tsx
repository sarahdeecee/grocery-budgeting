import { Settings } from "@mui/icons-material";
import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { ItemType } from "../Types";
import { sortAZ, sortNewOld, sortOldNew, sortZA } from "../helpers/Helpers";

function Header(props: any) {
  const {items, setItems, handleDeleteAll} = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (e: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(e.currentTarget);
  };

  const handleMenuClose = (): void => {
    setAnchorEl(null);
  };

  const handleSelectAll = (): void => {
    const itemsToCheck = [...items].filter((item: ItemType) => item.checked === false);
    const newItems = [...items].map((item: ItemType) => (itemsToCheck.includes(item)) ? {...item, checked: true} : item)
    setItems(newItems);
    setAnchorEl(null);
  }
  const handleDeselectAll = (): void => {
    const itemsToCheck = [...items].filter((item: ItemType) => item.checked === true);
    const newItems = [...items].map((item: ItemType) => (itemsToCheck.includes(item)) ? {...item, checked: false} : item)
    setItems(newItems);
    setAnchorEl(null);
  }
  const handleDeleteAllClose = (): void => {
    handleDeleteAll();
    setAnchorEl(null);
  }
  
  const handleSortAZ = (): void => {
    const newItems = [...items].sort((a, b) => sortAZ(a, b)).reverse();
    setItems(newItems);
    setAnchorEl(null);
  }
  const handleSortZA = (): void => {
    const newItems = [...items].sort((a, b) => sortZA(a, b)).reverse();
    setItems(newItems);
    setAnchorEl(null);
  }
  
  const handleSortOrderNew = (): void => {
    const newItems = [...items].sort((a, b) => sortNewOld(a, b)).reverse();
    setItems(newItems);
    setAnchorEl(null);
  }
  const handleSortOrderOld = (): void => {
    const newItems = [...items].sort((a, b) => sortOldNew(a, b)).reverse();
    setItems(newItems);
    setAnchorEl(null);
  }

  const handleSortCategory = (): void => {
    
  }

  return (
    <AppBar position="relative" color="primary" sx={{ bottom: 'auto', top: 0, height: '60px', width: '100vw', maxWidth: '800px'}}>
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
          <MenuItem onClick={handleSortCategory}>Sort by Category</MenuItem>
          <MenuItem onClick={handleSortOrderNew}>Sort New to Old</MenuItem>
          <MenuItem onClick={handleSortOrderOld}>Sort Old to New</MenuItem>
          <MenuItem onClick={handleSelectAll}>Select All</MenuItem>
          <MenuItem onClick={handleDeselectAll}>Deselect All</MenuItem>
          <MenuItem onClick={handleDeleteAllClose}>Delete All</MenuItem>
        </Menu></>}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
