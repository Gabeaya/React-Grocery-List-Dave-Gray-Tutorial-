import React, {useState} from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
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
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}/>
            <label
              onDoubleClick={() => handleCheck(item.id)}
            >{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0"/>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Content;