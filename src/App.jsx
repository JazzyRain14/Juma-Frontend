import { useState } from 'react'
import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import SignIn from './pages/SignIn.jsx'
import Landingpg from './pages/Landingpg'
import SignUp from './pages/SignUp.jsx'
import NavBar from './components/NavBar.jsx'
import HomePage from './pages/HomePage.jsx'
import UserProfile from './pages/UserProfile.jsx'
import TransanctionHistory from './pages/TransanctionHistory.jsx'
import SharedLayouts from './components/User/home/SharedLayouts.jsx'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpg />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/home' element={<SharedLayouts />} >
        <Route index element={<HomePage />} />
          <Route path='userprofile' element={ <UserProfile/>} />
          <Route path='transanction history' element={ <TransanctionHistory/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
