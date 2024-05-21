import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import LargeNav from './Components/Header/LargeNav/LargeNav'
import Home from './Pages/Home/Home'
import Login from './Pages/Authentication/Login'
import Signup from './Pages/Authentication/Signup'
import Main from './Pages/Profile/Main'
import MessagePage from './Pages/Chat/Messages/MessagesPage.jsx'
import ReelsPage from './Pages/Reels/ReelsPage.jsx'


function App() {


  return (
    <>

      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<div className='w-full h-auto bg-black'><Home /></div>} >
          <Route path='*/profile' element={<Main />}>
          </Route>
          <Route path='*/messages' element={<MessagePage />}></Route>
          <Route path='*/reels' element={<ReelsPage />}></Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
