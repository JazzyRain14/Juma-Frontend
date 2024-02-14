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
import Cart1 from './pages/AllCategoriesPage/Cart1.jsx'
import Cart2 from './pages/AllCategoriesPage/Cart2.jsx'
import Cart3 from './pages/AllCategoriesPage/Cart3.jsx'
import Cart4 from './pages/AllCategoriesPage/Cart4.jsx'
import Cart5 from './pages/AllCategoriesPage/Cart5.jsx'
import Cart6 from './pages/AllCategoriesPage/Cart6.jsx'
import Cart7 from './pages/AllCategoriesPage/Cart7.jsx'
import AllCart from './pages/AllCart.jsx'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpg />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/home' element={<SharedLayouts />} >
          <Route index element={<HomePage />} />
          <Route path='categories/cart1' element={<Cart1 />} />
          <Route path='categories/cart2' element={<Cart2 />} />
          <Route path='categories/cart3' element={<Cart3 />} />
          <Route path='categories/cart4' element={<Cart4 />} />
          <Route path='categories/cart5' element={<Cart5 />} />
          <Route path='categories/cart6' element={<Cart6 />} />
          <Route path='categories/cart7' element={<Cart7 />} />
          <Route path='product cart' element={<AllCart />} />
          <Route path='userprofile' element={<UserProfile />} />
          <Route path='transanction history' element={<TransanctionHistory />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
