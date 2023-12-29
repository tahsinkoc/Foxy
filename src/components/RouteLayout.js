import { useRef, useEffect, useState } from 'react'
import {
    Routes,
    Route,
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import Login_Register from './Login_Register'
import Home from './Home'
import Warsaw from './Warsaw'
import Navbar from './PageComponents/Navbar'

function RouteLayout() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route index element={<Home />} />
                <Route path='/login' element={<Login_Register />} />
                <Route path='/warsaw' element={<Warsaw />} />
            </Routes>
        </Router>
    )
}

export default RouteLayout