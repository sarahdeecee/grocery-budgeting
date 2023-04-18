import { Box, Grid, IconButton, List, ListItem, Typography } from "@mui/material";
import { Add, Edit, Remove } from '@mui/icons-material';
import { useState } from "react";
import Item from "./Item";
import { ItemType } from './../Types';

function ItemList(props: any) {
  const [checked, setChecked] = useState([0]);
  const {items, setItems} = props;

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
  const handleQuantityUp = (e: React.MouseEvent<HTMLElement>): void => {
    console.log('up');
    // const newItems = items.map((item: ItemType) => {
    //   if (item.name === itemCurrent.name) {
    //     return {...itemCurrent, quantity: itemCurrent.quantity + 1};
    //   } else {
    //     return item;
    //   }
    // })
    // setItems(newItems);
  }
  
  const handleQuantityDown = (): void => {
    console.log('down');
  }

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {items.map((listedItem: ItemType) => 
        <Item listedItem={listedItem} handleToggle={handleToggle} checked={checked} />
      )}
    </List>
  );
}

export default ItemList;