import { Box, Collapse, List } from "@mui/material";
import Item from "../components/Item";
import { ItemType } from '../Types';
import CategoryBar from "../components/CategoryBar";
import { categoriesAll } from "../data/Categories";
import { useState } from "react";
import { sortAZ } from "../helpers/Helpers";

interface CategoryOpenInterface {
  [key: string]: boolean, 
}
const categoriesAllOpen: CategoryOpenInterface = categoriesAll.reduce((acc: CategoryOpenInterface, category: string = 'Other') => (acc[category] = true, acc), {});

function ItemList(props: any) {
  const {items, setItems, handleDialogOpen, handleToggle, setSelectedItem, setEditItem, sortBy, setSortBy} = props;
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

  const itemsByCategories = Array.isArray(categoriesAll) && categoriesAll.map(category => <Box key={`${category}-box`}>
    {[...items].filter((item: ItemType) => item.category === category).length > 0 && <CategoryBar category={category} open={categoriesOpen[category]} handleCategory={handleCategory} />}
      <Collapse in={categoriesOpen[category]}>
        {[...items].filter((item: ItemType) => item.category === category)
          .reverse()
          // sort alphabetically
          .sort((itemA: ItemType, itemB: ItemType) => sortAZ(itemA, itemB))
          .map((listedItem: ItemType) => 
            <Item key={`item-comp-${listedItem.name}`} listedItem={listedItem} items={items} setSelectedItem={setSelectedItem} handleToggle={handleToggle} handleQuantityUp={handleQuantityUp} handleQuantityDown={handleQuantityDown} handleItemEdit={handleDialogEdit} />
          )}
      </Collapse>
  </Box>)

  const itemsBySortType = (order: string) => {
    const sortedItems = [...items];
    if (order === 'new') {
      sortedItems.reverse();
    } else if (order === 'old') {
      // array default order
    } else if (order === 'AZ') {
      sortedItems.sort((itemA: ItemType, itemB: ItemType) => sortAZ(itemA, itemB));
    } else if (order === 'ZA') {
      sortedItems.sort((itemA: ItemType, itemB: ItemType) => sortAZ(itemA, itemB)).reverse();
    }
    
    return sortedItems
      .map((listedItem: ItemType) => 
      <Item key={`item-comp-${listedItem.name}`} listedItem={listedItem} items={items} setSelectedItem={setSelectedItem} handleToggle={handleToggle} handleQuantityUp={handleQuantityUp} handleQuantityDown={handleQuantityDown} handleItemEdit={handleDialogEdit} />
    )
  }

  return (
    <List sx={{ p: 0, width: '100%', maxWidth: '600px', bgcolor: 'background.paper', display: 'flex', flexDirection: 'column'}}>
      {sortBy === 'category' ? itemsByCategories : itemsBySortType(sortBy)}
    </List>
  );
}

export default ItemList;