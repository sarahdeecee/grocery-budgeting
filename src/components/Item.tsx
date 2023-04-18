import { Checkbox, Grid, IconButton, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import React from "react";
import { blankItem } from "../Types";
import { Add, Delete, Remove } from "@mui/icons-material";

function Item(props: any) {
  const {listedItem, setSelectedItem, handleToggle, checked, handleQuantityUp, handleQuantityDown, handleItemDelete} = props;
  const {name, quantity, priceCents, hasTax, notes} = listedItem ?? blankItem;
  const price = `$${priceCents/100}.00`;
  const quantityPrice = `($${priceCents/100*quantity}.00)`;
  const labelId = `checkbox-list-label-${name}`;

  const itemFormatted = <Grid container>
    <Grid item container xs={8} sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column', justifyContent: 'center'}}>
      <Typography>{name}</Typography>
      <Typography variant="caption">{notes}</Typography>
    </Grid>
    <Grid item container xs={4}>
      <Stack>
        <Typography>{price}</Typography>
        <Typography variant="caption">{quantityPrice}</Typography>
      </Stack>
    </Grid>
  </Grid>

  return (
    <ListItem
      key={name}
      // secondaryAction={
        
      // }
      // disablePadding
    >
      {/* <ListItemButton
        role={undefined}
        dense
        > */}
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={checked.indexOf(name) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
            onClick={handleToggle(name)} 
          />
        </ListItemIcon>
      {/* // </ListItemButton> */}
      <Grid container item spacing={0} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Grid item xs={9}>
          <ListItemText
            id={labelId}
            primary={itemFormatted}
          />
        </Grid>
        <Grid container item xs={3} sx={{alignItems: 'center', justifyContent: 'center'}}>
          <Grid item xs={3}>
            <IconButton aria-label="edit" onClick={(e: any)=> {
              e.preventDefault();
              handleQuantityUp(listedItem);
            }}>
              <Add />
            </IconButton>
          </Grid>
          <Grid container item xs={3}>
            <Typography mx={2}>{quantity}</Typography>
          </Grid>
          <Grid container item xs={3}>
            <IconButton aria-label="edit" onClick={(e: React.MouseEvent)=> {
              e.preventDefault();
              handleQuantityDown(listedItem)
            }}>
              <Remove />
            </IconButton>
          </Grid>
          <Grid container item xs={3}>
            <IconButton aria-label="edit" onClick={(e: React.MouseEvent)=> {
              e.preventDefault();
              handleItemDelete(listedItem)
            }}>
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );
}

export default Item;