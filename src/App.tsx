import './App.css';
import { Box, Dialog, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { DialogType, ItemType, blankItem } from './Types';
import ItemList from './components/ItemList';
import NewItem from './pages/NewItem';
import Footer from './components/Footer';
import Header from './components/Header';
import EditItem from './components/EditItem';
import ConfirmDelete from './components/ConfirmDelete';
import ConfirmDeleteAll from './components/ConfirmDeleteAll';
import { itemsDefault } from './data/DevData';

function App() {
  const [items, setItems] = useState<ItemType[] | []>([]);
  const [selectedItem, setSelectedItem] = useState<ItemType>(blankItem);
  const [editItem, setEditItem] = useState<Number | null>(null);
  const [dialog, setDialog] = useState<DialogType>({
    content: '',
    open: false
  })
  
  useEffect(() => {
  
  }, [items]);

  const handleDialogClose = (): void => setDialog({...dialog, open: false});
  const handleDialogOpen = (content: string): void => setDialog({...dialog, content, open: true});

  const handleDialogConfirmDelete = (selectedItem: ItemType): void => {
    setSelectedItem(selectedItem);
    handleDialogOpen('delete')
  };
  const handleDialogConfirmDeleteAll = (): void => {
    handleDialogOpen('deleteall')
  };
  const handleToggle = (currentItem: ItemType) => {
    const itemToCheck = items.find((item: ItemType) => item.name === currentItem.name) ?? blankItem;
    const index = items.findIndex((item: ItemType) => item.name === currentItem.name);

    const newItems = [...items];
    itemToCheck.checked = (itemToCheck.checked) ? false : true;
    newItems[index] = itemToCheck;
    setItems(newItems);
  };

  return (<Stack className="App" sx={{top: 0, p: 0}}>
    <Header items={items} setItems={setItems} handleDeleteAll={handleDialogConfirmDeleteAll} handleToggle={handleToggle} />
      {items.length === 0 ? <Box sx={{minHeight: 'calc(100vh - 60px - 56px)', width: '100%', maxWidth: '800px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
        <Typography variant="h5">No items added.</Typography>
      </Box> : 
      <Stack className="List" sx={{width: '100vw', maxWidth: '800px', alignItems: 'center', backgroundColor: 'white', zIndex: 1, minHeight: 'calc(100vh - 60px - 56px)'}}>
        <ItemList setSelectedItem={setSelectedItem} items={items} setItems={setItems} handleDialogOpen={handleDialogOpen} handleDialogConfirmDelete={handleDialogConfirmDelete} handleToggle={handleToggle} editItem={editItem} setEditItem={setEditItem} />
      </Stack>}
      <Footer items={items} handleDialogOpen={handleDialogOpen} />
      <Dialog fullWidth open={dialog.open}>
        {dialog.content === 'delete' && <ConfirmDelete selectedItem={selectedItem} items={items} setItems={setItems} handleDialogClose={handleDialogClose} />}
        {dialog.content === 'deleteall' && <ConfirmDeleteAll items={items} setItems={setItems} handleDialogClose={handleDialogClose} />}
        {dialog.content === 'add' && <NewItem items={items} setItems={setItems} handleDialogClose={handleDialogClose} editItem={editItem} setEditItem={setEditItem} />}
        {dialog.content === 'edit' && <EditItem items={items} setItems={setItems} handleDialogClose={handleDialogClose} setSelectedItem={setSelectedItem} handleDialogOpen={handleDialogOpen} handleDelete={handleDialogConfirmDelete} editItem={editItem} setEditItem={setEditItem} />}
      </Dialog>
    </Stack>
  );
}

export default App;