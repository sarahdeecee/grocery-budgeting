import { Settings } from "@mui/icons-material";
import { AppBar, Divider, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { ItemType } from "../Types";

function Header(props: any) {
  const {items, setItems, handleDeleteAll, sortBy, setSortBy} = props;
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
  
  const handleSortBy = (order: string): void => {
    setSortBy(order);
    setAnchorEl(null);
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
          <MenuItem onClick={() => handleSortBy('category')}>Sort by Category</MenuItem>
          <MenuItem onClick={() => handleSortBy('priceHigh')}>Sort Price High to Low</MenuItem>
          <MenuItem onClick={() => handleSortBy('priceLow')}>Sort Price Low to High</MenuItem>
          <MenuItem onClick={() => handleSortBy('AZ')}>Sort A to Z</MenuItem>
          <MenuItem onClick={() => handleSortBy('ZA')}>Sort Z to A</MenuItem>
          <MenuItem onClick={() => handleSortBy('new')}>Sort New to Old</MenuItem>
          <MenuItem onClick={() => handleSortBy('old')}>Sort Old to New</MenuItem>
          <Divider />
          <MenuItem onClick={handleSelectAll}>Select All</MenuItem>
          <MenuItem onClick={handleDeselectAll}>Deselect All</MenuItem>
          <MenuItem onClick={handleDeleteAllClose}>Delete All</MenuItem>
        </Menu></>}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
