import { useRef, useEffect, useState } from 'react'
import {
    Routes,
    Route,
    BrowserRouter as Router,
    Link
} from 'react-router-dom'
import Login_Register from './Login_Register'
import Home from './Home'

function RouteLayout() {
    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path='/login' element={<Login_Register />} />
            </Routes>
        </Router>
    )
}

export default RouteLayout