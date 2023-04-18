import { Grid, IconButton, ListItem, ListItemIcon, ListItemText, Stack, Typography } from "@mui/material";
import React from "react";
import { blankItem, formatPrice } from "../Types";
import { Add, CheckCircleOutline, Edit, RadioButtonUnchecked, Remove } from "@mui/icons-material";

function Item(props: any) {
  const {listedItem, items, setSelectedItem, handleToggle, checked, handleQuantityUp, handleQuantityDown, handleItemDelete, handleItemEdit} = props;
  const {name, quantity, priceCents, hasTax, notes} = listedItem ?? blankItem;

  const price = formatPrice(priceCents);
  const quantityPrice = `(${formatPrice(priceCents*quantity)})`;
  const labelId = `checkbox-list-label-${name}`;

  const itemFormatted = <Grid key={`grid7-${name}`} container>
    <Grid key={`grid8-${name}`} item container xs={8} sx={{display: 'flex', alignItems: 'flex-start', flexDirection: 'column', justifyContent: 'center'}}>
      <Typography key={`name-${name}`}>{name}</Typography>
      <Typography key={`notes-${name}`} variant="caption">{notes}</Typography>
    </Grid>
    <Grid key={`grid-9${name}`} item container xs>
      <Stack key={`stack-${name}`}>
        <Typography key={`price-${name}`} >{price}</Typography>
        <Typography key={`qprice-${name}`} variant="caption">{quantityPrice}</Typography>
      </Stack>
    </Grid>
  </Grid>

  return (
    <ListItem
      key={name}
      secondaryAction={<>
        <IconButton key={`editbutton-${name}`} aria-label="edit" onClick={(e: React.MouseEvent)=> {
          e.preventDefault();
          handleItemEdit(items.indexOf(listedItem));
        }}>
          <Edit key={`edit-${name}`} />
        </IconButton>
        </>
      }
    >
      <ListItemIcon key={`listicon-${name}`}>
        <IconButton onClick={handleToggle(name)}>
          {(checked.indexOf(name) === -1) ? <RadioButtonUnchecked key={`uncheck-${name}`} fontSize="large" /> : <CheckCircleOutline key={`check-${name}`} fontSize="large" />}
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