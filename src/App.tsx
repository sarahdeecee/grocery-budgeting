import { Stack } from '@mui/material';
import './App.css';
import ItemList from './components/ItemList';
import NewItem from './components/NewItem';
import { ItemType } from './Types';
import { useState } from 'react';

const itemsDefault: ItemType[] = [
  {
    name: 'Apple',
    quantity: 5,
    priceCents: 100,
    hasTax: true
  },
  {
    name: 'Orange',
    quantity: 1,
    priceCents: 500,
    hasTax: true
  },
  {
    name: 'Milk',
    quantity: 1,
    priceCents: 500,
    hasTax: true
  },
  {
    name: 'Bread',
    quantity: 1,
    priceCents: 500,
    hasTax: true
  },
  {
    name: 'Cookies',
    quantity: 1,
    priceCents: 500,
    hasTax: true
  },
];

const blankItem = {
  name: '',
  quantity: 0,
  priceCents: 0,
  hasTax: true
}

function App() {
  const [items, setItems] = useState<ItemType[]>(itemsDefault);
  const [currentItem, setCurrentItem] = useState<ItemType>(blankItem);

  return (
    <Stack className="App">
      <NewItem items={items} setItems={setItems} />
      <ItemList items={items} setItems={setItems} currentItem={currentItem} setCurrentItem={setCurrentItem} />
    </Stack>
  );
}

export default App;
