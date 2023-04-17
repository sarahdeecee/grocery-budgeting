import './App.css';
import ItemList from './components/ItemList';
import NewItem from './components/NewItem';

function App() {
  const items = [0,1,2,3];

  return (
    <div className="App">
      <NewItem />
      <ItemList items={items} />
    </div>
  );
}

export default App;
