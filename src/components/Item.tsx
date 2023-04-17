import { Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

function Item(props: any) {
  const {handleToggle, value, labelId, checked} = props
  return (
    <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={checked.indexOf(value) !== -1}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': labelId }}
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={`Item ${value + 1}`} />
    </ListItemButton>
  );
}

export default Item;