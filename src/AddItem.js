import React from 'react'
import { FaPlus} from 'react-icons/fa';

const AddItem = () => {
  return (
    <form className='addForm'>
      <label htmlFor='addItem'>
        AddItem
      </label>
      <input
        autoFocus
        id='addItem'
        type='text'
        placeholder='add item'
        required
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