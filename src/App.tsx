import { Stack } from '@mui/material';
import './App.css';
import ItemList from './components/ItemList';
import NewItem from './components/NewItem';
import { ItemType, blankItem } from './Types';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

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
  {
    name: 'Bananas',
    quantity: 1,
    priceCents: 100,
    hasTax: true
  },
  {
    name: 'Pop',
    quantity: 1,
    priceCents: 100,
    hasTax: true
  },
  {
    name: 'Muffins',
    quantity: 1,
    priceCents: 100,
    hasTax: true
  },
  {
    name: 'Sugar',
    quantity: 1,
    priceCents: 100,
    hasTax: true
  },
  {
    name: 'Coffee',
    quantity: 1,
    priceCents: 100,
    hasTax: true
  },
  {
    name: 'Creamer',
    quantity: 1,
    priceCents: 100,
    hasTax: true
  },
  {
    name: 'Salt',
    quantity: 1,
    priceCents: 100,
    hasTax: true
  },
  {
    name: 'Juice',
    quantity: 1,
    priceCents: 100,
    hasTax: true
  },
  {
    name: 'Cake',
    quantity: 1,
    priceCents: 100,
    hasTax: true
  },
  {
    name: 'Asparagus',
    quantity: 1,
    priceCents: 100,
    hasTax: true
  },
  {
    name: 'Spinach',
    quantity: 1,
    priceCents: 100,
    hasTax: true
  },
];

function App() {
  const [items, setItems] = useState<ItemType[]>(itemsDefault);

  useEffect(() => {

  }, items)

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
