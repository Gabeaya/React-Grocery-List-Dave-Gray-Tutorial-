import React from 'react'
import { FaPlus} from 'react-icons/fa';

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form className='addForm'>
      <label htmlFor='addItem'>
        AddItem
      </label>
      <input
        autoFocus
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
      >
        <FaPlus />
      </button>

    </form>
  )
}

export default AddItem