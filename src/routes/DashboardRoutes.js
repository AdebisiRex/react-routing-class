import React from 'react'
import { Routes, Route } from 'react-router-dom'
import UserProfile from '../pages/UserProfile'
import Dashboard from '../pages/Dashboard'

const DashboardRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/dashboard/user-profile' element={<UserProfile/>}/>
   </Routes>
  )
}

export default DashboardRoutes