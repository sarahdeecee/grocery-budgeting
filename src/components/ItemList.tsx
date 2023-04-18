import { Box, Grid, IconButton, List, ListItem, Typography } from "@mui/material";
import { Add, Edit, Remove } from '@mui/icons-material';
import { useState } from "react";
import Item from "./Item";
import { ItemType } from './../Types';

function ItemList(props: any) {
  const [checked, setChecked] = useState([0]);
  const {items, setItems, currentItem, setCurrentItem} = props;

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
  const handleQuantityUp = (selectedItem: ItemType): void => {
    console.log('quantity up');
    const newItems = items.map((item: ItemType) => {
      if (item.name === selectedItem.name) {
        return {...selectedItem, quantity: selectedItem.quantity + 1};
      } else {
        return item;
      }
    })
    setItems(newItems);
    // setCurrentItem({selectedItem, quantity: selectedItem.quantity + 1});
  }
  
  const handleQuantityDown = (): void => {
    console.log('down');
  }

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {items.map((listedItem: ItemType) => 
        <Item listedItem={listedItem} handleToggle={handleToggle} checked={checked} currentItem={currentItem} setCurrentItem={setCurrentItem} handleQuantityUp={handleQuantityUp} />
      )}
    </List>
  );
}

export default ItemList;