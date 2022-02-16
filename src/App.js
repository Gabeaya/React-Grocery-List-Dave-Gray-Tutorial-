import  {Header}  from "./Header";
import SearchItem from "./SearchItem";
import AddItem from './AddItem';
import Content from "./Content";
import Footer from "./Footer";
import {useState, useEffect} from 'react';
import apiRequest from "./apiRequest";

function App() {

  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([]);//this empty array is the default state for search queries... we need it if we have a search operator

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const [fetchError, setFetchError] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  //everytime the component renders useEffect is triggered.
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw Error('Did not recieve expected data');
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000)
  },[])//anything passed into the second array tells use effect to trigger when that state is changed 

  const addItem = async (item) => {
    // this ternary statement sets the id value for the item.
    const id = items.length ? items[items.length -  1].id + 1 : 1;
    const myNewItem = { id, checked: false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems);
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postOptions);
      if (result) setFetchError(result);
  }

  // set a variable each to a functin that maps through the items, for the item that matches the id as the item that was clicked, we will make a Copy, using the spreadoperator= ...item, of the said item and alter its checked property.
  const handleCheck = async (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item);
    setItems(listItems);
    
    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: 'PATCH',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked})
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if(result) setFetchError(result);
  }

  const handleDelete = async (id) => {
    // this creates a new array with all items except the selected id item
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    const deleteOptions = { method: 'DELETE'};
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if(result) setFetchError(result);
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
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{ color: 'red'}}>{`Error: ${fetchError}`}</p>}

        {!fetchError && !isLoading &&<Content 
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>

      <Footer length={items.length}
      />
    </div>
  );
}

export default App;
