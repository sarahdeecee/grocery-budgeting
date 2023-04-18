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

function App() {
  const [items, setItems] = useState<ItemType[]>(itemsDefault)

  return (
    <Stack className="App">
      <NewItem />
      <ItemList items={items} setItems={setItems} />
    </Stack>
  );
}

export default App;
