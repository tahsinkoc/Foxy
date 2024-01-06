import { useState, useEffect } from 'react'
import Navbar from './PageComponents/Navbar'
import Notification from './Notifications/Notification'
import { useNavigate } from 'react-router-dom'


function Login_Register() {
    const navigate = useNavigate()

    const [isOpen, setOpen] = useState(false)
    const [message, setMessage] = useState('false')

    const [Login, setLogin] = useState({
        Username: '',
        Password: ''
    })

    const isAnyKeyEmpty = (object) => {
        for (var anahtar in object) {
            if (object[anahtar] === '') {
                return false;
            }
        }
        return true;
    }
    const LoginUser = () => {
        fetch('http://localhost:4575/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Login),
        })
            .then(res => res.json())
            .then(res => {
                if (res.status === 200) {
                    setMessage('Login Succed! Redirecting...')
                    setOpen(true);
                    setTimeout(() => {
                        setOpen(false)
                    }, 3000);
                } else {
                    setMessage(res.message)
                    setOpen(true);
                    setTimeout(() => {
                        setOpen(false)
                    }, 3000);
                }
            })

    }

    // asd


    return (
        <>
            <Notification isOpen={isOpen} setOpen={setOpen} message={message} />
            <div className="flex items-center justify-center h-screen w-full">
                <div className='w-[30rem] rounded shadow z-10'>
                    {/* <div className="w-11/12 py-2 text-[1.2rem] px-2 text-white bg-gradient-to-r from-rr to-t rounded text-center">
                        Login
                    </div> */}
                    <div className="w-fuull px-2">
                        <div className="w-full flex flex-col py-2">
                            {/* <label htmlFor="" className='text-t mb-2'>Username</label> */}
                            <input onChange={(e) => setLogin((current) => ({ ...current, Username: e.target.value }))} maxLength={16} placeholder='Username' type="text" className='bg-transparent border-b border-b-borderColor outline-none my-2 py-2 text-white placeholder:white' />
                        </div>
                        <div className="w-full flex flex-col py-2">
                            {/* <label htmlFor="" className='text-t mb-2'>Username</label> */}
                            <input onChange={(e) => setLogin((current) => ({ ...current, Password: e.target.value }))} maxLength={24} placeholder='Password' type="password" className='bg-transparent border-b border-b-borderColor outline-none my-2 py-2 text-white placeholder:white' />
                        </div>
                        <div className="w-full flex flex-col py-2">
                            <button onClick={LoginUser} className='w-full bg-gradient-to-r from-rr to-t rounded text-center text-white p-2'>
                                Login
                            </button>
                        </div>
                    </div>
                    <button onClick={() => navigate('/register')} className='w-full rounded text-start text-white p-2 my-2'>
                        If you have account ? Login now
                    </button>
                </div>
                <img src="/assets/irelia.jpg" className='h-full md:w-full md:h-auto fixed opacity-[.5] blur-lg' alt="irelia.jpg" />
                <title>Login</title>

            </div>
        </>
    )

}

export default Login_Register