import { Box, Dialog, Stack, Typography } from '@mui/material';
import './App.css';
import ItemList from './components/ItemList';
import NewItem from './components/NewItem';
import { DialogType, ItemType, blankItem } from './Types';
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { itemsDefault } from './data/DevData';
import ConfirmDelete from './components/ConfirmDelete';

function App() {
  const [items, setItems] = useState<ItemType[] | []>([]);
  const [selectedItem, setSelectedItem] = useState<ItemType>(blankItem);
  const [dialog, setDialog] = useState<DialogType>({
    content: '',
    open: false
  })

  const handleDialogClose = (): void => setDialog({...dialog, open: false});
  const handleDialogOpen = (content: string): void => setDialog({...dialog, content, open: true});

  return (<>
      <Header />
      {items.length === 0 ? <Box sx={{height: 'calc(100vh - 56px - 56px)', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Typography variant="h5">No items added.</Typography>
      </Box> : 
      <Stack className="App">
        <ItemList setSelectedItem={setSelectedItem} items={items} setItems={setItems} handleDialogOpen={handleDialogOpen} />
      </Stack>}
      <Footer items={items} handleDialogOpen={handleDialogOpen} />
      <Dialog fullWidth open={dialog.open}>
        {dialog.content === 'delete' && <ConfirmDelete selectedItem={selectedItem} items={items} setItems={setItems} handleDialogClose={handleDialogClose} />}
        {dialog.content === 'add' && <NewItem items={items} setItems={setItems} handleDialogClose={handleDialogClose} />}
      </Dialog>
    </>
  );
}

export default App;