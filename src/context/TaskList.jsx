import React, { createContext, useReducer } from 'react'
import { taskList } from '../reducer/TaskList'

export const TaskListContext = createContext()

function TaskList({children}) {

    const [TaskLists, dispatchListAction] = useReducer(taskList, [])

  return (
    <TaskListContext.Provider value={{TaskLists, dispatchListAction}} >
        {children}
    </TaskListContext.Provider>
  )
}

export default TaskList