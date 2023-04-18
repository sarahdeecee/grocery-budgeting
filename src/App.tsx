import { Stack } from '@mui/material';
import './App.css';
import ItemList from './components/ItemList';
import NewItem from './components/NewItem';
import { ItemType } from './Types';
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { itemsDefault } from './data/DevData';

function App() {
  const [items, setItems] = useState<ItemType[]>(itemsDefault);

  return (<>
      <Header />
      <Stack className="App">
        {/* <NewItem items={items} setItems={setItems} /> */}
        <ItemList items={items} setItems={setItems} />
      </Stack>
      <Footer items={items} />
    </>
  );
}

export default App;
