import React from 'react'
import { FaPlus} from 'react-icons/fa';
import {useRef} from 'react';

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef();

  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='addItem'>
        AddItem
      </label>
      <input
        autoFocus
        ref={inputRef}
        // autofocus immediately places cursor into this field
        id='addItem'
        type='text'
        placeholder='add item'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button 
        type='submit'
        aria-label='add item'
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>

    </form>
  )
}

export default AddItem