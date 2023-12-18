import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn'
import Landingpg from './pages/Landingpg'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpg />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
