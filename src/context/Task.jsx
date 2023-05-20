import React, { createContext, useReducer } from 'react'
import { TaskReducer } from '../reducer/Task'

export const TasksContext = createContext(TaskReducer)

function Tasks({children}) {

    const [Tasks, dispatchTaskAction] = useReducer(TaskReducer, [])

  return (
    <TasksContext.Provider value={{Tasks, dispatchTaskAction}} >
        {children}
    </TasksContext.Provider>
  )
}

export default Tasks