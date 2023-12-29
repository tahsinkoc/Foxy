import { useState, useEffect } from 'react'
import Navbar from './PageComponents/Navbar'
import Notification from './Notifications/Notification'
function Login_Register() {

    const [reg, setReg] = useState(false)
    const [isOpen, setOpen] = useState(false)
    const [message, setMessage] = useState('false')

    const [Register, setRegister] = useState({
        NameSurname: '',
        Username: '',
        UsernameInGame: '',
        RiotTag: '',
        Server: '',
        Mail: '',
        Password: '',
        PasswordConfirm: ''
    })

    const [Login, setLogin] = useState({
        Username: '',
        Password: ''
    })

    const HandleChange = (e, a) => {
        setRegister(current => ({
            ...current,
            [a]: e
        }))
    }

    const RegisterUser = () => {
        if (Register.Password !== Register.PasswordConfirm) {
            setMessage('Passwords Doesn`t match.')
            setOpen(true);
            setTimeout(() => {
                setOpen(false)
            }, 3000);
        } else {
            delete Register.PasswordConfirm
            fetch('http://localhost:4575/register', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Register),
            })
                .then(res => res.json())
                .then(res => {
                    setMessage(res.message)
                    setOpen(true);
                    setTimeout(() => {
                        setOpen(false)
                    }, 3000);
                })
        }
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


    if (reg) {
        return (
            <>
                <Notification isOpen={isOpen} setOpen={setOpen} message={message} />
                <div className="flex items-center justify-center h-screen w-full lg:my-0 mt-10">
                    <div className='w-[30rem] rounded z-10'>
                        {/* <div className="w-11/12 py-2 text-[1.2rem] px-2 text-white bg-gradient-to-r from-rr to-t rounded text-center">
                        Login
                    </div> */}
                        <div className="w-fuull px-2">
                            <div className="w-full flex flex-col py-2">
                                <input onChange={(e) => HandleChange(e.target.value, 'NameSurname')} placeholder='Name & Surname' type="text" className='bg-transparent border-b border-b-borderColor outline-none my-2 py-2 text-white placeholder:white' />
                            </div>
                            <div className="w-full flex flex-col py-2">
                                <input onChange={(e) => HandleChange(e.target.value, 'Username')} placeholder='Username' type="text" className='bg-transparent border-b border-b-borderColor outline-none my-2 py-2 text-white placeholder:white' />
                            </div>
                            <div className="w-full flex flex-row py-2 justify-between">
                                <input onChange={(e) => HandleChange(e.target.value, 'UsernameInGame')} placeholder='Username in Game' type="text" className='bg-transparent border-b w-[48%] border-b-borderColor outline-none my-2 py-2 text-white placeholder:white' />
                                <input onChange={(e) => HandleChange(e.target.value, 'RiotTag')} placeholder='#RiotTag' type="text" className='bg-transparent border-b w-[48%] border-b-borderColor outline-none my-2 py-2 text-white placeholder:white' />
                            </div>
                            <div className="w-full flex flex-col py-2">
                                <select defaultValue='TR' value={Register.Server} onChange={(e) => HandleChange(e.target.value, 'Server')} name="" className='bg-transparent border-b border-b-borderColor outline-none my-2 py-2 text-gray-100 placeholder:white  text-white' id="">
                                    <option className='bg-slate-600 text-orange-500 hover:bg-slate-600' value="TR">TR</option>
                                    <option className='bg-slate-600 text-orange-500 hover:bg-slate-600' value="EU">EU</option>
                                    {/* text-[#9CA3AF] */}
                                </select>
                            </div>
                            <div className="w-full flex flex-col py-2">
                                <input onChange={(e) => HandleChange(e.target.value, 'Mail')} placeholder='Email' type="mail" className='bg-transparent border-b border-b-borderColor outline-none my-2 py-2 text-white placeholder:white' />
                            </div>
                            <div className="w-full flex flex-col py-2">
                                <input onChange={(e) => HandleChange(e.target.value, 'Password')} placeholder='Password' type="password" className='bg-transparent border-b border-b-borderColor outline-none my-2 py-2 text-white placeholder:white' />
                            </div>
                            <div className="w-full flex flex-col py-2">
                                <input onChange={(e) => HandleChange(e.target.value, 'PasswordConfirm')} placeholder='Password again' type="password" className='bg-transparent border-b border-b-borderColor outline-none my-2 py-2 text-white placeholder:white' />
                            </div>
                            <div className="w-full flex flex-col py-2">
                                <button onClick={RegisterUser} className='w-full bg-gradient-to-r from-rr to-t rounded text-center text-white p-2'>
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