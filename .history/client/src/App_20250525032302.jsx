import React from 'react'
import Register from './components/auth/Register'
import { Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import ForgetPassword from './components/auth/ForgetPassword'
import VerifyOtp from './components/auth/VerifyOtp'

const App = () => {
    return (
        <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forget/password' element={<ForgetPassword />} />
            <Route path='/forget/password' element={<ForgetPassword />} />
        </Routes>
    )
}

export default App
