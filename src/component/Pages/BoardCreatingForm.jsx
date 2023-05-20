import React, { useContext, useState } from 'react'
import { BoardContext } from '../../context/Bord';

function BoardCreatingForm() {
    const [boardTitle, setBoardTitle] = useState('');
    const {dispatchBoardAction} = useContext(BoardContext);

    const submitHeandler = (e) => {
        e.preventDefault();
        if(boardTitle){
            dispatchBoardAction({type:'CreateBoard', payload:{title:boardTitle} });
            setBoardTitle('')
            
        }else{
            alert('Please provide a board name')
        }
    }

  return (
    <div className="align-center m-top-md board-creating-part">
        <form onSubmit = {(e) => submitHeandler(e)} >
            <input 
                type="text"
                placeholder='Board Name' 
                name ='boardTitle' 
                value={boardTitle} 
                onChange={(e) => setBoardTitle(e.target.value)}
            />
            <button type='submit' onClick={(e) => submitHeandler(e)} >Add Board</button>
        </form>
    </div>
  )
}

export default BoardCreatingForm