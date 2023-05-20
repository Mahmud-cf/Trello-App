import React from 'react'
import crossIcon from '../../assets/icons/cross-2.svg'

function AddItemFrom({
    listForm,
    submitHeandler,
    title,
    onChangeHeandler,
    setEditMode
}) {

    const createHeandler = (e) =>{
        if (title !== ''){
            submitHeandler(e)
            
        }else{
            alert('Plese provide a name')
        }
    }

  return (
    <div className="form-container">
        <div className="form-card">
            <form onSubmit={(e) => createHeandler(e)}>
                <input 
                    autoFocus
                    placeholder={
                    listForm ? 'Enter the list title' : 'enter the task title'
                    }
                    value={title}
                    onChange={onChangeHeandler}
                    className="form-textarea"
                    name="" id=""
                />
            </form>
        </div>
        <div className="button-container">
            <button className="add-button"
                onClick={(e) => {
                    createHeandler(e);
                }}
            >
                {listForm? 'Add List' : 'Add Task'}
            </button>

            <svg className='for-rotate' width="22" height="22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            onClick={(e) => {
                setEditMode(false)
            }}
            >
                <path d="M12 5.75v12.5"></path>
                <path d="M18.25 12H5.75"></path>
            </svg>
            
            {/* <img
                onClick={(e) => {
                    setEditMode(false)
                }}
                className="form-icon"
            src={crossIcon} alt="" /> */}
        </div>
    </div>
  )
}

export default AddItemFrom
