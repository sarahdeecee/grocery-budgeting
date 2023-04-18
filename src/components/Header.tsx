import { AppBar, Toolbar, Typography } from "@mui/material";

function Header(props: any) {

  return (
    <AppBar position="relative" color="primary" sx={{ bottom: 'auto', top: 0 }}>
      <Toolbar>
        <Typography variant="h5">My Shopping List</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
