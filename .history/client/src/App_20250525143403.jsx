import React from 'react'
import Register from './components/auth/Register'
import { Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import ForgetPassword from './components/auth/ForgetPassword'
import VerifyOtp from './components/auth/VerifyOtp'
import UpdatePassword from './components/auth/UpdatePassword'

const App = () => {
    return (
        <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forget/password' element={<ForgetPassword />} />
            <Route path='/otp/verify' element={<VerifyOtp />} />
            <Route path='/otp/verify' element={<\p />} />
        </Routes>
    )
}

export default App
