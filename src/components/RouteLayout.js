import { useRef, useEffect, useState } from 'react'
import {
    Routes,
    Route,
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import Login_Register from './Login_Register'
import Register from './Register'
import Home from './Home'
import Warsaw from './Warsaw'
import Navbar from './PageComponents/Navbar'
import Profile from './Profile'

function RouteLayout() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/login' element={<Login_Register />} />
                <Route path='/warsaw' element={<Warsaw />} />
                <Route path='/register' element={<Register />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </Router>
    )
}

export default RouteLayout