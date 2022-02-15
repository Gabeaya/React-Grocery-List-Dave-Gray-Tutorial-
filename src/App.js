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
  return (
    <div className="App">
      <Header title="Groceries" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
