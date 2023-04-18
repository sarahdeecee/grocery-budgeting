import styled from "@emotion/styled";
import { Add, Menu, More, Search, Settings } from "@mui/icons-material";
import { AppBar, Box, Fab, IconButton, Toolbar, Typography } from "@mui/material";
import { ItemType } from "../Types";

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

function Footer(props: any) {
  const {items, handleDialogOpen} = props;
  const total = Array.isArray(items) ? items.reduce((sum: number, item: ItemType) => sum + (item.priceCents * item.quantity) / 100, 0) : 0;

  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0}}>
        <Toolbar sx={{justifyContent: 'space-between' }}>
          <Typography
            noWrap
            variant="h6"
          >{`Total: $${total}`}</Typography>
          <IconButton color="inherit" aria-label="open drawer">
            <Menu />
          </IconButton>
          <StyledFab color="success" aria-label="add">
            <Add onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              handleDialogOpen('add');
            }} />
          </StyledFab>
          {/* <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <Search />
          </IconButton>
          <IconButton color="inherit">
            <Settings />
          </IconButton> */}
        </Toolbar>
      </AppBar>
  );
}

export default Footer;
