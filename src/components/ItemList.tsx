import { Box, Grid, IconButton, List, ListItem, Typography } from "@mui/material";
import { Add, Edit, Remove } from '@mui/icons-material';
import { useState } from "react";
import Item from "./Item";
import { ItemType } from './../Types';

function ItemList(props: any) {
  const [checked, setChecked] = useState([0]);
  const {items} = props;

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  // {
  //   name: 'Cookies',
  //   quantity: 1,
  //   priceCents: 500,
  //   hasTax: true
  // },

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {items.map((item: ItemType) => {
        const {name, quantity} = item;
        const labelId = `checkbox-list-label-${name}`;

        return (
          <ListItem
            key={name}
            secondaryAction={
              <Grid container spacing={0} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Grid container item xs={3}>
                  <IconButton aria-label="edit">
                    <Add />
                  </IconButton>
                </Grid>
                <Grid container item xs={3}>
                  <Typography mx={2}>{quantity}</Typography>
                </Grid>
                <Grid container item xs={3}>
                  <IconButton aria-label="edit">
                    <Remove />
                  </IconButton>
                </Grid>
              </Grid>
            }
            disablePadding
          >
            <Item handleToggle={handleToggle} item={item} labelId={labelId} checked={checked} />
          </ListItem>
        );
      })}
    </List>
  );
}

export default ItemList;