import { Stack } from '@mui/material';
import './App.css';
import ItemList from './components/ItemList';
import NewItem from './components/NewItem';

function App() {
  const items = [0,1,2,3];

  return (
    <Stack className="App">
      <NewItem />
      <ItemList items={items} />
    </Stack>
  );
}

export default App;
