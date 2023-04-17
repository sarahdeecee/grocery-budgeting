import { Checkbox, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, Typography } from "@mui/material";

function Item(props: any) {
  const {item, labelId, handleToggle, checked} = props;
  const {name, quantity, priceCents, hasTax} = item;

  return (
    <ListItemButton
      role={undefined}
      onClick={handleToggle(name)} 
      dense
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={checked.indexOf(name) !== -1}
          tabIndex={-1}
          disableRipple
          inputProps={{ 'aria-labelledby': labelId }}
        />
      </ListItemIcon>
      <ListItemText id={labelId} primary={<Typography>{name}</Typography>} />
    </ListItemButton>
  );
}

export default Item;