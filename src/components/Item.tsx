import { Checkbox, Grid, IconButton, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import React from "react";
import { blankItem } from "../Types";
import { Add, Delete, Remove } from "@mui/icons-material";

function Item(props: any) {
  const {listedItem, setSelectedItem, handleToggle, checked, handleQuantityUp, handleQuantityDown, handleItemDelete} = props;
  const {name, quantity, priceCents, hasTax, notes} = listedItem ?? blankItem;

  const formatPrice = (price: number): string => {
    if (price % 100 === 0) {
      return `$${price/100}.00`;
    } else if (price % 10 === 0) {
      return `$${price/100}0`
    } else {
      return `$${price/100}`
    }
  }

  const price = formatPrice(priceCents);
  const quantityPrice = `(${formatPrice(priceCents*quantity)})`;
  const labelId = `checkbox-list-label-${name}`;

  const itemFormatted = <Grid container>
    <Grid item container xs={8} sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column', justifyContent: 'center'}}>
      <Typography>{name}</Typography>
      <Typography variant="caption">{notes}</Typography>
    </Grid>
    <Grid item container xs>
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
        <IconButton aria-label="edit" onClick={(e: React.MouseEvent)=> {
          e.preventDefault();
          handleItemDelete(listedItem)
        }}>
          <Delete />
        </IconButton>
      }
      // disablePadding
      // disableGutters={true}
    >
        <ListItemIcon>
          <Checkbox
            // edge="start"
            checked={checked.indexOf(name) !== -1}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
            onClick={handleToggle(name)} 
          />
        </ListItemIcon>
      <Grid container spacing={0} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Grid item xs>
          <ListItemText
            id={labelId}
            primary={itemFormatted}
          />
        </Grid>
        <Grid container item xs='auto' sx={{alignItems: 'center', justifyContent: 'center'}}>
          <Grid item xs sx={{justifyContent: 'center'}}>
            <IconButton aria-label="decrease" onClick={(e: React.MouseEvent)=> {
              e.preventDefault();
              handleQuantityDown(listedItem)
            }}>
              <Remove />
            </IconButton>
          </Grid>
          <Grid container item xs sx={{justifyContent: 'center'}}>
            <Typography>{quantity}</Typography>
          </Grid>
          <Grid container item xs sx={{justifyContent: 'center'}}>
            <IconButton aria-label="increase" onClick={(e: React.MouseEvent)=> {
              e.preventDefault();
              handleQuantityUp(listedItem);
            }}>
              <Add />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );
}

export default Item;