import React from 'react'
import plussIcon from '../../assets/icons/plus.png'

function AddItem({listAddItem, setEditMode}) {
  return (
    <div onClick={() => setEditMode (true)} className={listAddItem ? 'add-item list-add-item' : 'add-item task-add-item'} >
        {/* <img src={plussIcon} alt="" className='add-item-icon' /> */}
        <svg width="22" height="22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5.75v12.5"></path>
          <path d="M18.25 12H5.75"></path>
        </svg>
        <p className='add-item-text' > {listAddItem ? 'Add another list' : 'Add a task'} </p>
    </div>
  )
}

export default AddItem