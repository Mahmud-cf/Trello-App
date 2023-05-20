import React, { useContext, useState } from 'react'
import { BoardContext } from '../../context/Bord';
import { TasksContext } from '../../context/Task';
import { TaskListContext } from '../../context/TaskList';

import crossIcon from '../../assets/icons/cross.png'
import TaskCard from './TaskCard';
import AddItemFrom from './AddItemFrom';
import AddItem from './AddItem';
import { Droppable } from 'react-beautiful-dnd';

function TaskList({taskList}) {
    const [taskTitle, setTaskTitle] = useState('');
    const [editMode, setEditMode] = useState(false);

    const {title} = taskList;
    const { dispatchBoardAction } = useContext(BoardContext);
    const { dispatchListAction } = useContext(TaskListContext);
    const {Tasks: allTasks, dispatchTaskAction} = useContext(TasksContext);
    
    const submitHeandler= (e) => {
        e.preventDefault();
        const id = Date.now();
        dispatchTaskAction({ type : 'createTask', payload : {id: id, title:taskTitle, taskID :taskList.id, boardID : taskList.boardID } });
        dispatchListAction({type : 'addTaskIdtoList', payload: {id:taskList.id, taskID:id}});
        dispatchBoardAction({type: 'AddTaskIdFromBoard', payload:{id:taskList.boardID, taskID : id }})
        setTaskTitle('');
        setEditMode(false);
    }

    const removeHeandler = () =>{
        dispatchListAction({type: 'deleteList', payload:{id:taskList.id}});
        dispatchBoardAction({type:'RemoveListIdFromBoard', payload:{id: taskList.boardID, listId:taskList.id}})

    }


  return (
        <Droppable droppableId = {taskList.id + ''} >
            {(provided) => {
                return(
                <div ref = {provided.innerRef} {...provided.droppableProps} >
                    <div className='list-container'>
                        <div className='list-title-container'>
                            <h5>{title}</h5>
                            <svg className='for-rotate' width="22" height="22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                onClick={removeHeandler}
                            >
                                <path d="M12 5.75v12.5"></path>
                                <path d="M18.25 12H5.75"></path>
                            </svg>
                            
                        </div>
                        {
                            taskList.task.map(item => {
                                return allTasks.find(i => i.id === item)
                            })?.map((task,index)=>(
                                <TaskCard key={task.id} index={index} task={task} id={task.id} taskList={taskList} ></TaskCard>
                            ))
                        }
                        {editMode ? (
                            <AddItemFrom 
                                submitHeandler={submitHeandler}
                                title={taskTitle}
                                onChangeHeandler={(e) =>setTaskTitle(e.target.value) }
                                editMode={editMode}
                                setEditMode={setEditMode }
                            />
                        ):(
                            <AddItem setEditMode={setEditMode} />
                        )
                        }
                    </div>
                    {provided.placeholder}
                </div>
                )
            }}
        </Droppable>
    )
        
}

export default TaskList