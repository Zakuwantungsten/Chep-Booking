import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import RoomDetails from './pages/RoomDetails'
import MyBooking from './pages/MyBooking'
import HouseReg from './components/HouseReg'
import Layout from './pages/HouseOwner/Layout'
import Dashboard from './pages/HouseOwner/Dashboard'
import AddRoom from './pages/HouseOwner/AddRoom'
import ListRoom from './pages/HouseOwner/ListRoom'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");
  const {showHouseReg} = useAppContext();

  return (
    <div>
      <Toaster/>
     {!isOwnerPath && <Navbar />}
     {showHouseReg && <HouseReg/>}
     <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<AllRooms/>}/>
          <Route path='/rooms/:id' element={<RoomDetails/>}/>
          <Route path='/my-bookings' element={<MyBooking/>}/>
          <Route path='/owner' element={<Layout/>}>
              <Route index element={<Dashboard/>}/>
              <Route path='add-room' element={<AddRoom/>}/>
              <Route path='list-room' element={<ListRoom/>}/>
          </Route>
        </Routes>
     </div>
     <Footer/>
    </div>
  )
}

export default App