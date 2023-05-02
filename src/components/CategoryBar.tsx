import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { ListItemButton, ListItemText } from "@mui/material";

function CategoryBar(props: any) {

  return (
    <ListItemButton
      sx={{
        bgcolor: 'green',
        height: '2rem'
    }}>
      <ListItemText
        primary="Produce"
        primaryTypographyProps={{
          fontSize: 'medium',
          fontWeight: 'bold',
          mb: '2px',
          color: 'white'
        }}
      />
      <KeyboardArrowUp
        sx={{
          mr: -1,
          // opacity: 0,
          // transform: open ? 'rotate(-180deg)' : 'rotate(0)',
          // transition: '0.2s',
        }}
      />
    </ListItemButton>
  );
}

export default CategoryBar;