import React from 'react'
import Register from './components/auth/Register'
import { Routes, Route } from 'react-router-dom'
import Login from './components/auth/Login'
import ForgetPassword from './components/auth/ForgetPassword'
import VerifyOtp from './components/auth/VerifyOtp'
import UpdatePassword from './components/auth/UpdatePassword'
import Super from './components/Super'
import Home from './Home'
import RegistrationForm from './pages/Donor'
import ReceiverForm from './pages/Receiver'

const App = () => {
    return (
        <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forget/password' element={<ForgetPassword />} />
            <Route element={<Super />}>
                <Route path='/otp/verify' element={<VerifyOtp />} />
                <Route path='/password/update' element={<UpdatePassword />} />
            </Route>
            <Route path="/home" element={<Home />} />
            <Route path="/registration/donor" element={<RegistrationForm />} />
            <Route path="/registration/receiver" element={<ReceiverForm />} />

        </Routes>
    )
}

export default App
