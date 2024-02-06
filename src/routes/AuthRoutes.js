import React from 'react'
import { Routes, Route} from 'react-router-dom'
import AuthLanding from '../pages/AuthLanding'
import SignUp from '../pages/SignUp'

const AuthRoutes = () => {
  return (
    <Routes>
        <Route index element={<AuthLanding/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signup" element={<SignUp/>}/>
    </Routes>
  )
}

export default AuthRoutes