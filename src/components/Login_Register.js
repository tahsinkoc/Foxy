import { useState, useEffect } from 'react'
import Navbar from './PageComponents/Navbar'

function Login_Register() {

    const [reg, setReg] = useState(false)

    if (reg) {
        return (
            <>
                <Navbar />
                <div className="flex items-center justify-center h-screen w-full">
                    <div className='w-[30rem] rounded shadow z-10'>
                        {/* <div className="w-11/12 py-2 text-[1.2rem] px-2 text-white bg-gradient-to-r from-rr to-t rounded text-center">
                        Login
                    </div> */}
                        <div className="w-fuull px-2">
                            <div className="w-full flex flex-col py-2">
                                {/* <label htmlFor="" className='text-t mb-2'>Username</label> */}
                                <input placeholder='Username' type="text" className='bg-transparent border-b border-b-borderColor outline-none my-2 py-2 text-white placeholder:white' />
                            </div>
                            <div className="w-full flex flex-col py-2">
                                {/* <label htmlFor="" className='text-t mb-2'>Username</label> */}
                                <input placeholder='Password' type="password" className='bg-transparent border-b border-b-borderColor outline-none my-2 py-2 text-white placeholder:white' />
                            </div>
                            <div className="w-full flex flex-col py-2">
                                {/* <label htmlFor="" className='text-t mb-2'>Username</label> */}
                                <input placeholder='Password again' type="password" className='bg-transparent border-b border-b-borderColor outline-none my-2 py-2 text-white placeholder:white' />
                            </div>
                            <div className="w-full flex flex-col py-2">
                                <button className='w-full bg-gradient-to-r from-rr to-t rounded text-center text-white p-2'>
                                    Register
                                </button>
                                <button onClick={() => setReg(!reg)} className='w-full rounded text-start text-white p-2 my-2'>
                                    If you have account ? Login now
                                </button>
                            </div>
                        </div>
                    </div>
                    <img src="/assets/irelia.jpg" className='h-full md:w-full md:h-auto fixed opacity-[.5] blur-lg' alt="irelia.jpg" />
                    <title>Login-Register</title>

                </div>
            </>
        )
    } else {
        return (
            <>
                <Navbar />
                <div className="flex items-center justify-center h-screen w-full">
                    <div className='w-[30rem] rounded shadow z-10'>
                        {/* <div className="w-11/12 py-2 text-[1.2rem] px-2 text-white bg-gradient-to-r from-rr to-t rounded text-center">
                        Login
                    </div> */}
                        <div className="w-fuull px-2">
                            <div className="w-full flex flex-col py-2">
                                {/* <label htmlFor="" className='text-t mb-2'>Username</label> */}
                                <input maxLength={16} placeholder='Username' type="text" className='bg-transparent border-b border-b-borderColor outline-none my-2 py-2 text-white placeholder:white' />
                            </div>
                            <div className="w-full flex flex-col py-2">
                                {/* <label htmlFor="" className='text-t mb-2'>Username</label> */}
                                <input maxLength={24} placeholder='Password' type="password" className='bg-transparent border-b border-b-borderColor outline-none my-2 py-2 text-white placeholder:white' />
                            </div>
                            <div className="w-full flex flex-col py-2">
                                <button className='w-full bg-gradient-to-r from-rr to-t rounded text-center text-white p-2'>
                                    Login
                                </button>
                                <button onClick={() => setReg(!reg)} className='w-full rounded text-start text-white p-2 my-2'>
                                    If you dont have account ? Register now
                                </button>
                            </div>
                        </div>
                    </div>
                    <img src="/assets/irelia.jpg" className='h-full md:w-full md:h-auto fixed opacity-[.5] blur-lg' alt="irelia.jpg" />
                    <title>Login-Register</title>

                </div>
            </>
        )
    }

    return (
        <></>
    )
}

export default Login_Register