import React from 'react'
import Navbar from './PageComponents/Navbar'
import { AiFillWindows } from 'react-icons/ai'
import { GiFox } from 'react-icons/gi'
import { AiOutlineArrowDown } from 'react-icons/ai'
import Cart from './Cart'
import InformationCarts from './InformationCarts'
import Prices from './Prices'
import Footer from './Footer'

function Home() {
    return (
        <div className='bg w-full'>
            <Navbar />
            <div className='w-full relative'>
                <div className='w-full justify-center items-center flex text-darker absolute bottom-12 z-10 invisible xl:visible'>
                    <AiOutlineArrowDown className='rounded-[60px] w-[50px] animate-bounce h-[50px] p-4 border border-darker' />
                </div>
                <img className='w-full opacity-50' src="/assets/irelia_2.png" alt="" />
            </div>
            <div className='mx-auto max-w-screen-2xl flex text-center py-12 flex-col items-center px-4'>
                <p className='text-[2.8rem] md:text-[3.75rem] max-w-[60rem] text-center font-bold text-text'>
                    Foxy - Your Personal Gaming Coach
                </p>
                <p className='text-[1.5rem] max-w-[60rem] text-center text-text py-20'>
                    The Foxy App simplifies the process of mastering difficult games, helping you improve at every step of your journey to the top.
                </p>
                <div className="flex flex-col md:flex-row">
                    <button className='flex items-center rounded-md my-2 md:my-0 transition duration-150 border outline-0 border-darker text-darker py-3 text-[1.1rem] bg-gradient-to-r from-transparent to-transparent  px-6 hover:from-rr hover:to-t hover:text-white mx-2'>
                        <AiFillWindows size={35} />
                        &nbsp;
                        Download for windows
                    </button>
                    <button className='rounded-md my-2 md:my-0 transition duration-150 border border border-white text-white py-3 text-[1.1rem] px-6 hover:bg-white hover:text-bg mx-2'>
                        See how it works
                    </button>
                </div>
            </div>
            <div className="w-48 my-12 border-bottom border-white mx-auto text-darker items-center flex justify-center animate-pulse">
                <GiFox size={60} />
            </div>
            <Cart />
            <InformationCarts />
            <Prices />
            <Footer />
        </div>
    )
}

export default Home