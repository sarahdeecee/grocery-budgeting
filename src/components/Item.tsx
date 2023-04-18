import { Checkbox, Grid, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { ItemType } from "../Types";
import { Add, Remove } from "@mui/icons-material";

function Item(props: any) {
  const {listedItem, handleToggle, checked, currentItem, setCurrentItem, handleQuantityUp} = props;
  const {name, quantity, priceCents, hasTax} = listedItem;
  const price = `$${priceCents/100}.00`;
  const quantityPrice = `($${priceCents/100*quantity}.00)`;
  const labelId = `checkbox-list-label-${name}`;

  const itemFormatted = <Grid container>
    <Grid item xs={8} sx={{display: 'flex', alignItems: 'center'}}>
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
    <ListItem
      key={name}
      secondaryAction={
        <Grid container spacing={0} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Grid container item xs={3}>
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
              // handleQuantityDown(item)
            }}>
              <Remove />
            </IconButton>
          </Grid>
        </Grid>
      }
      disablePadding
    >
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
    </ListItem>
  );
}

export default Item;