import { useState } from 'react'
import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import { SharedContextProvider } from './components/User/home/SharedContextProvider.jsx'
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
import HelpSupport from './pages/HelpSupport.jsx'
import Wallet from './pages/Wallet.jsx'
import SnackUploadPg from './pages/AdminPages/snacksUploadPg.jsx'
import SaucesUploadPg from './pages/AdminPages/saucesUploadPg.jsx'
import EthnicFoodUploadPg from './pages/AdminPages/ethnicFoodUploadPg.jsx'
import BakeryItmUploadPg from './pages/AdminPages/bakeryItmUploadPg.jsx'
import SoftDrksUploadPg from './pages/AdminPages/softDrksUploadPg.jsx'
import AlcoholicBevUploadPg from './pages/AdminPages/alcoholicBevUploadPg.jsx'
import DesertSwtUploadPg from './pages/AdminPages/desertSwtUploadPg.jsx'
import AdminHome from './pages/AdminPages/AdminHome.jsx'
import ProductDetailspg from './pages/AdminPages/ProductDetailspg.jsx'
import SavedItems from './components/SavedItems.jsx'

function App() {


  return (
    <>
      <SharedContextProvider>
        <Routes>
          <Route path="/" element={<Landingpg />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/adminhome/snacks" element={<SnackUploadPg />} />
          <Route path="/adminhome/saucesandcondiments" element={<SaucesUploadPg />} />
          <Route path="/adminhome/ethnicfood" element={<EthnicFoodUploadPg />} />
          <Route path="/adminhome/bakeryitems" element={<BakeryItmUploadPg />} />
          <Route path="/adminhome/softdrinks" element={<SoftDrksUploadPg />} />
          <Route path="/adminhome/alcoholicbeverages" element={<AlcoholicBevUploadPg />} />
          <Route path="/adminhome/desertandsweets" element={<DesertSwtUploadPg />} />
          <Route path='home' element={<SharedLayouts />} >
            <Route index element={<HomePage />} />
            <Route path='categories/cart1' element={<Cart1 />} />
            <Route path='categories/cart2' element={<Cart2 />} />
            <Route path='categories/cart3' element={<Cart3 />} />
            <Route path='categories/cart4' element={<Cart4 />} />
            <Route path='categories/cart5' element={<Cart5 />} />
            <Route path='categories/cart6' element={<Cart6 />} />
            <Route path='categories/cart7' element={<Cart7 />} />
            <Route path='saveditems' element={<SavedItems />} />
            <Route path='userprofile' element={<UserProfile />} />
            <Route path='product cart' exact element={<AllCart />} />
            <Route path=':itemCategory/:item_id' element={<ProductDetailspg />} />
            <Route path='help&support' element={<HelpSupport />} />
            <Route path='juma wallet' element={<Wallet />} />
            <Route path='transanction history' element={<TransanctionHistory />} />
          </Route>
        </Routes>
      </SharedContextProvider>
    </>
  )
}

export default App
