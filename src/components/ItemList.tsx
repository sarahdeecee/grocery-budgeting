import { Box, List } from "@mui/material";
import Item from "./Item";
import { ItemType } from './../Types';
import CategoryBar from "./CategoryBar";
import { categoriesAll } from "../data/Categories";
import { useState } from "react";

interface CategoryOpenInterface {
  [key: string]: boolean, 
}
const categoriesAllOpen: CategoryOpenInterface = categoriesAll.reduce((acc: CategoryOpenInterface, category: string) => (acc[category] = true, acc), {});

function ItemList(props: any) {
  const {items, setItems, handleDialogOpen, handleToggle, setSelectedItem, setEditItem} = props;
  const [categoriesOpen, setCategoriesOpen] = useState<CategoryOpenInterface>(categoriesAllOpen);

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

  const handleDialogEdit = (index: number): void => {
    setEditItem(index);
    handleDialogOpen('edit')
  };

  const handleCategory = (category: string): void => {
    categoriesOpen[category] ? setCategoriesOpen({...categoriesOpen, [category]: false}) : setCategoriesOpen({...categoriesOpen, [category]: true})
  }

  const itemsByCategories = categoriesAll.map(category => <Box key={`${category}-box`}>
    {items.filter((item: ItemType) => item.category === category).length > 0 && <CategoryBar category={category} open={categoriesOpen[category]} handleCategory={handleCategory} />}
    {categoriesOpen[category] && items.filter((item: ItemType) => item.category === category)
      .reverse()
      .map((listedItem: ItemType) => 
        <Item key={`item-comp-${listedItem.name}`} listedItem={listedItem} items={items} setSelectedItem={setSelectedItem} handleToggle={handleToggle} handleQuantityUp={handleQuantityUp} handleQuantityDown={handleQuantityDown} handleItemEdit={handleDialogEdit} />
      )}
  </Box>)

  return (
    <List sx={{ width: '100%', maxWidth: '600px', bgcolor: 'background.paper', display: 'flex', flexDirection: 'column'}}>
      {itemsByCategories}
    </List>
  );
}

export default ItemList;