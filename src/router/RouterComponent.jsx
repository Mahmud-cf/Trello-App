import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import BoardeDetails from '../Pages/BoardeDetails'
import FormBoard from '../Pages/FormBoard'


function RouterComponent() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element ={<FormBoard/>} />
            <Route path="/:boardID" element ={<BoardeDetails/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouterComponent