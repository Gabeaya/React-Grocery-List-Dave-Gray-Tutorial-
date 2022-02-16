import  {Header}  from "./Header";
import SearchItem from "./SearchItem";
import AddItem from './AddItem';
import Content from "./Content";
import Footer from "./Footer";
import {useState, useEffect} from 'react';

function App() {

  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);//this empty array is the default state for search queries... we need it if we have a search operator

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const [fetchError, setFetchError] = useState(null);

  //everytime the component renders useEffect is triggered.
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('Did not recieve expected data');
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }
    }

    (async () => await fetchItems())();
  },[])//anything passed into the second array tells use effect to trigger when that state is changed 

  const addItem = (item) => {
    // this ternary statement sets the id value for the item.
    const id = items.length ? items[items.length -  1].id + 1 : 1;
    const myNewItem = { id, checked: false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  // set a variable each to a functin that maps through the items, for the item that matches the id as the item that was clicked, we will make a Copy, using the spreadoperator= ...item, of the said item and alter its checked property.
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item);
    setItems(listItems);
  }

  const handleDelete = (id) => {
    // this creates a new array with all items except the selected id item
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  const handleSubmit = (e) => {
    console.log('submit it')
    if (!newItem) return;
    // line 47 resets the input value so it wont stay there after submission
    addItem(newItem);
    setNewItem('');
    e.preventDefault();
  }

  return (
    <div className="App">
      <Header title="Groceries" />
      
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <main>
        {fetchError && <p style={{ color: 'red'}}>{`Error: ${fetchError}`}</p>}
        <Content 
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </main>

      <Footer length={items.length}
      />
    </div>
  );
}

export default App;
