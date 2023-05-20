import React from 'react'
import BoardCreatingForm from '../component/Pages/BoardCreatingForm'
import BoardList from '../component/Pages/BoardList'

function FormBoard() {
  return (
    <div>
      <div className='docs-part' >
        <div>
          <p> <strong>DOCS: </strong> Create a board and click on it to go to another page</p>
        </div>
        <div>
          <h2>WRIGHT A BOARD NAME</h2>
        </div>
      </div>
      <BoardCreatingForm></BoardCreatingForm>
      <BoardList></BoardList>
    </div>
  )
}

export default FormBoard