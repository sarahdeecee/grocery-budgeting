import { Checkbox, Grid, ListItemButton, ListItemIcon, ListItemSecondaryAction, ListItemText, Stack, Typography } from "@mui/material";

function Item(props: any) {
  const {item, labelId, handleToggle, checked} = props;
  const {name, quantity, priceCents, hasTax} = item;
  const price = `$${priceCents/100}.00`;
  const quantityPrice = `($${priceCents/100*quantity}.00)`;

  const itemFormatted = <Grid container>
    <Grid item xs={8}>
      <Typography>{name}</Typography>
    </Grid>
    <Grid item container xs={4}>
      <Stack>
        <Typography>{price}</Typography>
        <Typography variant="caption">{quantityPrice}</Typography>
      </Stack>
    </Grid>
  </Grid>

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
      <ListItemText
        id={labelId}
        primary={itemFormatted}
      />
    </ListItemButton>
  );
}

export default Item;