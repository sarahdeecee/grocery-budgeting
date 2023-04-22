import { Grid, IconButton, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import React from "react";
import { blankItem, formatPrice } from "../Types";
import { Add, CheckCircleOutline, Edit, RadioButtonUnchecked, Remove } from "@mui/icons-material";

function Item(props: any) {
  const {listedItem, items, handleToggle, handleQuantityUp, handleQuantityDown, handleItemDelete, handleItemEdit} = props;
  const {name, quantity, priceCents, tax, checked, notes} = listedItem ?? blankItem;

  const price = formatPrice(priceCents);
  const quantityPrice = formatPrice(priceCents * quantity);
  const taxPrice = formatPrice(priceCents * quantity * tax / 100);
  const labelId = `checkbox-list-label-${name}`;

  const itemFormatted = <Grid key={`grid7-${name}`} container  sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column', justifyContent: 'center'}}>
    <Grid key={`grid8-${name}`} item container sx ={{alignItems: 'flex-end'}}>
      <Typography key={`name-${name}`} variant="body1" fontWeight="bold" sx={{pr: 1}}>{name}</Typography>
      <Typography key={`notes-${name}`} variant="caption">{notes}</Typography>
    </Grid>
    <Grid key={`price-container-${name}`} item container sx={{flexDirection: 'row', justifyContent: 'flex-end'}}>
      <Grid item key={`grid9-${name}`}>
        <Typography key={`price-${name}`}>{price}</Typography>
      </Grid>
      <Grid item key={`grid10-${name}`} sx={{ml: 1}}>
        <Typography key={`qprice-${name}`} variant="caption">{`(${quantityPrice} + ${taxPrice})`}</Typography>
      </Grid>
    </Grid>
  </Grid>

  return (
    <ListItem
      key={name}
      disableGutters
      secondaryAction={<>
        <IconButton key={`editbutton-${name}`} aria-label="edit" onClick={(e: React.MouseEvent)=> {
          e.preventDefault();
          handleItemEdit(items.indexOf(listedItem));
          }}
        >
          <Edit key={`edit-${name}`} />
        </IconButton>
        </>
      }
    >
      <ListItemIcon key={`listicon-${name}`}>
        <IconButton onClick={(e: React.MouseEvent)=> {
          e.preventDefault();
          console.log('toggle');
          handleToggle(listedItem)}}
          edge="end"
        >
          {checked ? <CheckCircleOutline key={`check-${name}`} fontSize="large" /> : <RadioButtonUnchecked key={`uncheck-${name}`} fontSize="large" />}
        </IconButton>
      </ListItemIcon>
      <Grid key={`grid1-${name}`} container spacing={0} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Grid key={`grid2-${name}`} item xs>
          <ListItemText
            key={`listtext-${name}`}
            id={labelId}
            primary={itemFormatted}
          />
        </Grid>
        <Grid key={`grid3-${name}`} container item xs='auto' sx={{alignItems: 'center', justifyContent: 'center'}}>
          <Grid key={`grid4-${name}`} item xs sx={{justifyContent: 'center'}}>
            <IconButton key={`down-${name}`} aria-label="decrease" onClick={(e: React.MouseEvent)=> {
              e.preventDefault();
              handleQuantityDown(listedItem)
            }}>
              <Remove key={`downicon-${name}`} />
            </IconButton>
          </Grid>
          <Grid key={`grid5-${name}`} container item xs sx={{justifyContent: 'center'}}>
            <Typography key={`amount-${name}`}>{quantity}</Typography>
          </Grid>
          <Grid key={`grid6-${name}`} container item xs sx={{justifyContent: 'center'}}>
            <IconButton key={`up-${name}`} aria-label="increase" onClick={(e: React.MouseEvent)=> {
              e.preventDefault();
              handleQuantityUp(listedItem);
            }}>
              <Add key={`addicon-${name}`} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </ListItem>
  );
}

export default Item;