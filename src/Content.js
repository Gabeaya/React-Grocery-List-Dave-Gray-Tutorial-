import React, {useState} from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
  
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
    <main>
      {items.length ? (
        <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input
            type="checkbox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}/>
            <label
            style={(item.checked) ? { textDecoration: 'line-through'} : null}
              onDoubleClick={() => handleCheck(item.id)}
            >{item.item}</label>
            <FaTrashAlt 
              onClick={() => handleDelete(item.id)}
              role="button" tabIndex="0"/>
          </li>
        ))}
      </ul>
      ) : (
        <p style={{marginTop: '2emf'}}>Your list is empty.</p>
      )}
      
    </main>
  )
}

export default Content;