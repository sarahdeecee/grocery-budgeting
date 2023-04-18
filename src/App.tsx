import { Dialog, Stack } from '@mui/material';
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
  const [items, setItems] = useState<ItemType[]>(itemsDefault);
  const [selectedItem, setSelectedItem] = useState<ItemType>(blankItem);
  const [dialog, setDialog] = useState<DialogType>({
    content: '',
    open: false
  })

  const handleDialogClose = (): void => setDialog({...dialog, open: false});
  const handleDialogOpen = (content: string): void => setDialog({...dialog, content, open: true});

  return (<>
      <Header />
      <Stack className="App">
        {/* <NewItem items={items} setItems={setItems} /> */}
        <ItemList setSelectedItem={setSelectedItem} items={items} setItems={setItems} handleDialogOpen={handleDialogOpen} />
      </Stack>
      <Footer items={items} />
      <Dialog open={dialog.open}>
        <ConfirmDelete selectedItem={selectedItem} items={items} setItems={setItems} handleDialogClose={handleDialogClose} />
      </Dialog>
    </>
  );
}

export default App;