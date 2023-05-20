import React, { useContext, useState } from 'react'
import { BoardContext } from '../../context/Bord';
import { TasksContext } from '../../context/Task';
import { TaskListContext } from '../../context/TaskList';
import AddItemFrom from './AddItemFrom';
import crossIcon from '../../assets/icons/cross.png'
import { Draggable } from 'react-beautiful-dnd';

function TaskCard({task, index}) {
    const [taskTitle, setTaskTitle] = useState(task.title);
    const [editMode, setEditMode] = useState(false);
    const {dispatchBoardAction} = useContext(BoardContext);
    const {dispatchTaskAction} = useContext(TasksContext);
    const {dispatchListAction} = useContext(TaskListContext);

    const submitHeandler = (e) => {
        e.preventDefault();
        dispatchTaskAction({type: 'updateTask', payload: {id:task.id, title :taskTitle}})
        setEditMode(false);
    }
    const removeHeandler = () =>{
        dispatchTaskAction({type:'deleteTask', payload:{id:task.id}});
        dispatchListAction({type:'removeTaskIdtoList', payload:{id:task.taskID, taskID:task.id}});
        dispatchBoardAction({type:'RemoveTaskIdFromBoard', payload:{id:task.boardID, taskID:task.id}})
    }

  return (
        <Draggable draggableId={task.id + ''} index={index} >
            {(provider) => {
                return(
                    <div ref={provider.innerRef} {...provider.draggableProps} {...provider.dragHandleProps} >

                        {editMode?(
                            <AddItemFrom
                                onChangeHeandler={(e) => setTaskTitle(e.target.value)}
                                title={taskTitle}
                                submitHeandler={submitHeandler}
                                removeHeandler={removeHeandler}
                            />
                        ):(
                            <div onClick={(e) => {setEditMode(true)}} className='task-card' >
                                <p>{taskTitle}</p>
                                <img onClick={removeHeandler} src={crossIcon} alt="" className='add-item-icon' />
                            </div>
                            )
                        }
                    </div>
                )
            }}
        </Draggable>
    )
        
}

export default TaskCard