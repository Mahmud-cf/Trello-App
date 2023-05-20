import React, { useContext } from 'react'
import { BoardContext } from '../../context/Bord'
import { TasksContext } from '../../context/Task';
import { TaskListContext } from '../../context/TaskList';
import cross from '../../assets/icons/cross.png'

function BoardItem({board}) {
    const {dispatchBoardAction} = useContext(BoardContext)
    const {TaskLists, dispatchListAction} = useContext( TaskListContext )
    const {Tasks, dispatchTaskAction} = useContext( TasksContext );
    
    const removeBoardHeandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const listTobeDeleted = TaskLists.filter(item => item.boardID === board.id);
        const tasksTobeDeleted = Tasks.filter(item => item.taskID === board.id);
        dispatchBoardAction({ type: 'DeleteBoard', payload : {id: board.id} });
        listTobeDeleted.forEach( (list) => {
            dispatchListAction({ type: 'deleteList', payload: {id:list.id } })
        } );
        tasksTobeDeleted.forEach( (task) => {
            dispatchTaskAction({ type: 'deleteTask', payload: {id:task.id } })
        } );
    
    }

  return ( 
    <div className="board-box">
        <div className="">
            <div className= "heading-cross d-flex">
                <h5 className="title-gap">{board.title}</h5>
                <img className="add-item-icon" onClick={(e) => removeBoardHeandler(e)} src={cross} alt="Delete Board" />
            </div>
            <p className = "title-gap align-self-flex-end">{board.title} is created</p>
            <a> View details </a>
        </div>
    </div>
  )
}

export default BoardItem