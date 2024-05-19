import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import LargeNav from './Components/Header/LargeNav/LargeNav'
import Home from './Pages/Home/Home'


function App() {


  return (
    <>
      <div className='w-full min-h-screen bg-black '>
        <Home />
      </div>
    </>
  )
}

export default App
