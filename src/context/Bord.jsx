import React, { createContext, useReducer } from 'react'
import { bordReducer } from '../reducer/Bord'

export const BoardContext = createContext()

function Bord({children}) {

    const [boards, dispatchBoardAction] = useReducer(bordReducer, [])

  return (
    <BoardContext.Provider value={{boards, dispatchBoardAction}} >
        {children}
    </BoardContext.Provider>
  )
}

export default Bord