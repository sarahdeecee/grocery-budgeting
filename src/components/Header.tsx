import { Settings } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Header(props: any) {
  const handleEdit = () => {
    console.log('edit');
  };

  return (
    <AppBar position="relative" color="primary" sx={{ bottom: 'auto', top: 0, height: '56px'}}>
      <Toolbar sx={{justifyContent: 'space-between'}}>
        <Typography variant="h5">My Shopping List</Typography>
        <Settings onClick={handleEdit} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
