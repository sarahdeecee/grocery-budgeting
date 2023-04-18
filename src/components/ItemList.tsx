import { List } from "@mui/material";
import { useState } from "react";
import Item from "./Item";
import { ItemType } from './../Types';

function ItemList(props: any) {
  const [checked, setChecked] = useState([0]);
  const {items, setItems, handleDialogOpen, setSelectedItem} = props;

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

  const handleQuantityUp = (selectedItem: ItemType): void => {
    const newItems = items.map((item: ItemType) => {
      if (item.name === selectedItem.name) {
        return {...selectedItem, quantity: selectedItem.quantity + 1};
      } else {
        return item;
      }
    })
    setItems(newItems);
  }
  
  const handleQuantityDown = (selectedItem: ItemType): void => {
    const newItems = items.map((item: ItemType) => {
      if (item.name === selectedItem.name) {
        return (selectedItem.quantity > 0) ? {...selectedItem, quantity: selectedItem.quantity - 1} : selectedItem;
      } else {
        return item;
      }
    })
    setItems(newItems);
  }

  const handleDialogConfirmDelete = (selectedItem: ItemType): void => {
    setSelectedItem(selectedItem);
    handleDialogOpen('delete')
  };

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper', display: 'flex', flexDirection: 'column-reverse'}}>
      {Array.isArray(items) && items.map((listedItem: ItemType) => 
        <Item listedItem={listedItem} setSelectedItem={setSelectedItem} handleToggle={handleToggle} checked={checked} handleQuantityUp={handleQuantityUp} handleQuantityDown={handleQuantityDown} handleItemDelete={handleDialogConfirmDelete} />
      )}
    </List>
  );
}

export default ItemList;