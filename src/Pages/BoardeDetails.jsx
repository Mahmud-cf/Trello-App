import React, { useContext, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { BoardContext } from '../context/Bord';
import { TaskListContext } from '../context/TaskList';
import TaskList from '../component/Pages/TaskList';
import AddItem from '../component/Pages/AddItem.jsx'
import AddItemFrom from '../component/Pages/AddItemFrom';
import { DragDropContext } from 'react-beautiful-dnd';
import { TasksContext } from '../context/Task';

function BoardeDetails() {
  const [listTitle, setListTitle] = useState('');
  const [editMode, setEditMode] = useState(false);
  const {TaskLists, dispatchListAction} = useContext(TaskListContext);
  const {dispatchBoardAction} = useContext(BoardContext)
  const {dispatchTaskAction} = useContext(TasksContext )
  const {boardID} = useParams();
  console.log(TaskLists.length)

  const submitHeandler = (e) => {
    e.preventDefault();
    const id = Date.now();
    dispatchListAction({type:'createList', payload:{id:id, title:listTitle, boardID:boardID}})
    dispatchBoardAction({type:'AddListIdtoBoard', payload:{id:boardID, taskListID:id}});
    setListTitle("");
    setEditMode(false);
  }

  const onDragHeandler = (result) => {
    console.log(result)
    const {destination, source, draggableId } = result;

    if(!destination){
      return 
    }
    
    if(destination.droppableId !== source.droppableId){
      dispatchListAction({type:'removeTaskIdtoList', payload:{id:parseInt(source.droppableId), taskID: parseInt(draggableId)}})
      dispatchListAction({type:'addTaskIdtoList', payload:{id:parseInt(destination.droppableId), taskID: parseInt(draggableId)}  })
      dispatchTaskAction({type:'changeListIdOfTask', payload:{id: parseInt(draggableId),  taskID: parseInt(destination.droppableId) }  })
    } else if (destination.droppableId === source.droppableId){
      dispatchListAction({type:'sortTaskIdinList', payload:{targetIndex: destination.index, sourceIndex: source.index, droppableId: parseInt(source.droppableId)}})
    }

  }


  return (
      <DragDropContext onDragEnd={onDragHeandler} >
        <div className='docs-part'>
          <p> <strong>DOCS: </strong> Click the 'add list' button and create a list. After creating list, then click the 'add task' button and creat a task. You can create multiple tasks. Then you create another list and create tasks. Now you can dragdrop a task from one list to another list if you want.</p>
        </div>
        <div className="d-flex m-top-sm flex-direction-row add-list-button">
          
          {
            TaskLists 
            ?.filter((item)=> item.boardID===boardID)
            ?.map((taskList) => (
              <TaskList key={taskList.id} taskList={taskList} />
          ) )
          }
          {
            !editMode? ( 
              <AddItem listAddItem setEditMode={setEditMode} /> 
            ): (
              <AddItemFrom 
                title={listTitle}
                onChangeHeandler={(e)=> setListTitle(e.target.value)}
                listForm
                setEditMode={setEditMode}
                submitHeandler={submitHeandler}
              />
            )
          }
        </div>
      </DragDropContext>
  )
}

export default BoardeDetails