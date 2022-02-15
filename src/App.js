import  {Header}  from "./Header";
import Content from "./Content";
import Footer from "./Footer";
function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "A turtle"
    },
    {
      id: 2,
      checked: false,
      item: "toilet paper"
    },
    {
      id: 3,
      checked: false,
      item: "toilet"
    }
  ]);

  // set a variable each to a functin that maps through the items, for the item that matches the id as the item that was clicked, we will make a Copy, using the spreadoperator= ...item, of the said item and alter its checked property.
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked} : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
    // local storage will store all list items in a collection called shopping list
  }
  const handleDelete = (id) => {
    // this creates a new array with all items except the selected id item
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));

  }

  return (
    <div className="App">
      <Header title="Groceries" />
      <Content 
      items={items}
      setItems={setItemes}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
