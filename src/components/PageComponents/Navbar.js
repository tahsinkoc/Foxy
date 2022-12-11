import { useState, useEffect } from 'react'
import useWindowDimensions from '../Dimensions'
import { VscMenu, VscChromeClose } from 'react-icons/vsc'
import { useNavigate, Link } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    const { height, width } = useWindowDimensions();
    const [lgCheck, setlg] = useState(false)
    const [menuStat, setMenu] = useState(false)
    const [classKeeper, setClassKeeper] = useState('w-full bg-transparent fixed top-0 transition duration-300 delay-150 z-20 ease-out')
    useEffect(() => {
        width < 940 ? setlg(true) : setlg(false)
    }, [width])
    useEffect(() => {
        window.addEventListener('scroll', getScrollEvent)
    }, [width])

    const getScrollEvent = () => {
        if (window.scrollY > 20) {
            setClassKeeper('w-full bg-RB fixed top-0 z-20 transition duration-300 delay-150 ease-out')
        } else {
            setClassKeeper('w-full bg-transparent fixed top-0 z-20 transition duration-300 delay-150 ease-out')
        }
    }



    const toggleNavbar = () => {
        setMenu(!menuStat)

        // if (menuStat === false) {
        //     setAnim('animate-[wiggle_.5s_ease-in-out]')
        //     setMenu(!menuStat)
        // } else {
        //     setAnim('animate-[outer_.5s_ease-in-out]')
        //     setMenu(!menuStat)
        // }
    }

    const returnNavbar = () => {
        if (lgCheck) {
            if (!menuStat) {
                return (
                    <button className='z-30 animate-[fade_.7s_ease-in-out] transition duration-150' onClick={toggleNavbar}>
                        <VscMenu size={35} />
                    </button>
                )
            } else {
                return (
                    <button className='z-30 animate-[fade_.7s_ease-in-out] transition duration-150' onClick={toggleNavbar}>
                        <VscChromeClose size={35} />
                    </button>
                )
            }
        }
        else {
            return (
                <nav className='flex items-center'>
                    <a href="#" className='mr-12 text-lg text-gray hover:text-white'>
                        How it works
                    </a>
                    <a href="#" className='mr-12 text-lg text-gray hover:text-white'>
                        Prices
                    </a>
                    <button onClick={() => navigate('/login')} className='transition duration-300 mr-4 rounded-lg border-darker  text-white text-[.9em] bg-gradient-to-r from-rr to-t hover:from-rr hover:to-tt  w-32 py-1 items-center justify-center flex'>
                        Sign up
                    </button>
                    <button className='transition duration-300 rounded-lg border-white hover:bg-white hover:text-bg border text-white text-[.9em] bg-transparent w-32 py-1 items-center justify-center flex'>
                        Download
                    </button>
                </nav>
            )
        }
    }

    const renderRespMenu = () => {
        if (menuStat) {
            return (
                <div className='w-full sfixed z-10 top-0 h-screen bg-lbg fixed top-0 translate-x-0 animate-[wiggle_.5s_ease-in-out] lg:hidden'>
                    <nav className='flex items-center flex-col justify-center h-full'>
                        <a href="#" className='text-xl text-gray hover:text-white mt-12'>
                            How it works
                        </a>
                        <a href="#" className='text-xl text-gray hover:text-white mt-12'>
                            Prices
                        </a>
                        <button onClick={() => navigate('/login')} className='rounded-lg text-white text-lg bg-gradient-to-r from-rr to-t w-6/12 items-center justify-center flex mt-12 h-12'>
                            Sign up
                        </button>
                        <button className='transition duration-300 rounded-lg border-white hover:bg-white hover:text-bg border text-white text-lg bg-transparent w-32 py-2 w-6/12 mt-4 items-center justify-center flex'>
                            Download
                        </button>
                    </nav>
                </div>
            )
        } else {
            return (
                <div className='w-full sfixed z-10 top-0 h-screen bg-lbg fixed animate-[wiggles_.5s_ease-in-out] left-[-100%] lg:hidden'>
                    <nav className='flex items-center flex-col justify-center h-full'>
                        <a href="#" className='text-xl text-gray hover:text-white mt-12'>
                            How it works
                        </a>
                        <a href="#" className='text-xl text-gray hover:text-white mt-12'>
                            Prices
                        </a>
                        <button className='rounded-lg text-white text-lg bg-gradient-to-r from-rr to-t w-6/12 items-center justify-center flex mt-12 h-12'>
                            Sign up
                        </button>
                        <button className='transition duration-300 rounded-lg border-white hover:bg-white hover:text-bg border text-white text-lg bg-transparent w-32 py-2 w-6/12 mt-4 items-center justify-center flex'>
                            Download
                        </button>
                    </nav>
                </div>
            )
        }
    }

    return (
        <div className='w-full'>
            <div className={classKeeper}>
                <div className='max-w-screen-2xl mx-auto bg-transparent text-white p-4 text-xl flex justify-between items-center'>
                    <Link to={'/'}>
                        <img className='w-48 h-26 z-50' src="/assets/logo_2.png" alt="" />
                    </Link>
                    {returnNavbar()}
                </div>
                {renderRespMenu()}
            </div>
        </div>
    )
}

export default Navbar