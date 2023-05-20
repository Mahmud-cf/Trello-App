import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {BoardContext} from '../../context/Bord'
import BoardItem from './BoardItem'

function BoardList() {
  const {boards} = useContext(BoardContext)
  return (
    <div className="flex-wrap m-top-md d-flex justify-content-around board-container">
      {
        boards?.map(item => (
          <Link key={item.id} to={`/${item.id}`} >
            <BoardItem board = {item} ></BoardItem>
          </Link>
        ))
      }
    </div>
  )
}

export default BoardList