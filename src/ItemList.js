import React from 'react'
import LineItem from './LineItem'

const ItemList = ({items, handleCheck, handleDelete}) => {
  return (
    <ul>
        {items.map((item) => (
          <LineItem
          // line ten removes the error that each child needs a key
            key={item.id}
            item={item}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
  )
}

export default ItemList