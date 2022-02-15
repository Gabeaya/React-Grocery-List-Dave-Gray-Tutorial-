import React, {useState} from 'react'
import { FaTrashAlt } from 'react-icons/fa';

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
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
  ])
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className='item' key={item.id}>
            <input
            type="checkbox"
            checked={item.checked}/>
            <lable>{item.item}</lable>
            <FaTrashAlt role="button" tabIndex="0"/>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Content;