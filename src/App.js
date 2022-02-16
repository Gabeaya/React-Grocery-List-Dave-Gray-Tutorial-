import  {Header}  from "./Header";
import SearchItem from "./SearchItem";
import AddItem from './AddItem';
import Content from "./Content";
import Footer from "./Footer";
import {useState, useEffect} from 'react';

function App() {
  const [items, setItems] = useState([]);
    

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');


  //everytime the component renders useEffect is triggered.
  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('shoppinglist')))
  },[items])//anything passed into the second array tells use effect to trigger when that state is changed 
  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    // local storage will store all list items in a collection called shopping list
    localStorage.setItem('shoppinglist', JSON.stringify(newItems));

  }
  const addItem = (item) => {
    // this ternary statement sets the id value for the item.
    const id = items.length ? items[items.length -  1].id + 1 : 1;
    const myNewItem = { id, checked: false, item};
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);

  }
  // set a variable each to a functin that maps through the items, for the item that matches the id as the item that was clicked, we will make a Copy, using the spreadoperator= ...item, of the said item and alter its checked property.
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item);
    setAndSaveItems(listItems);
  }
  const handleDelete = (id) => {
    // this creates a new array with all items except the selected id item
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
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

      <Content 
      items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Footer length={items.length}
      />
    </div>
  );
}

export default App;
