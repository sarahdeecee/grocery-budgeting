import styled from "@emotion/styled";
import { Add, Menu, More, Search } from "@mui/icons-material";
import { AppBar, Box, Fab, IconButton, Toolbar, Typography } from "@mui/material";

const StyledFab = styled(Fab)({
  position: 'absolute',
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: '0 auto',
});

function Footer() {

  return (
    <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <Menu />
          </IconButton>
          <Typography
            noWrap
            sx={{left: 0, right: 0}}
          >Total: $0.00</Typography>
          <StyledFab color="success" aria-label="add">
            <Add />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <Search />
          </IconButton>
          <IconButton color="inherit">
            <More />
          </IconButton>
        </Toolbar>
      </AppBar>
  );
}

export default Footer;
