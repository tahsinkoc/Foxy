import React from 'react'
import { AiFillWindows } from 'react-icons/ai'

function Cart() {
    return (
        <div className='max-w-screen-2xl mx-auto'>
            <div className='mx-auto'>
                <p className='text-white mx-auto text-center text-[2em]'>
                    Supported Games
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 w-full py-12 gap-4">
                <div className="w-11/12 rounded-xl h-64 mx-auto overflow-hidden relative">
                    <div className='absolute bottom-2 w-full z-10'>
                        <img src="/assets/wordmark-lol.png" className='mx-auto' alt="" />
                    </div>
                    <img className='w-full cursor-pointer opacity-[.7] z-5 hover:scale-125 transition duration-300 delay-50 ease-in-out' src="/assets/key-art-v2-lol.webp" alt="" />
                </div>
                <div className="w-11/12 rounded-xl h-64 mx-auto overflow-hidden relative">
                    <div className='absolute bottom-2 w-full z-10'>
                        <img src="/assets/wordmark-valorant.png" className='mx-auto' alt="" />
                    </div>
                    <img className='w-full cursor-pointer opacity-[.7] z-5 hover:scale-125 transition duration-300 delay-50 ease-in-out' src="/assets/key-art-valorant-neon.webp" alt="" />
                </div>
                <div className="w-11/12 rounded-xl h-64 mx-auto overflow-hidden relative">
                    <div className='absolute bottom-2 w-full z-10'>
                        <p className='text-center text-white my-4 text-[1em]'>Comin Soon</p>
                        <img src="/assets/wordmark-apex.png" className='mx-auto w-48 h-24' alt="" />
                    </div>
                    <img className='w-full cursor-pointer opacity-[.7] z-5 hover:scale-125 transition duration-300 delay-50 ease-in-out' src="/assets/key-art-v2-apex1.webp" alt="" />
                </div>
            </div>
            <div className="w-11/12 mx-auto md:w-full text-center h-56 rounded-xl flex flex-col items-center justify-center bg-gradient-to-r from-rr to-t">
                <p className='text-white text-[1.8em]'>Join 1K Foxy users.</p>
                <p className='text-white text-[1.8em]'>Download the app today!</p>
                <button className='flex items-center rounded-md mt-8 bg-white border outline-0 border-white text-bg py-3 text-[1rem] px-6'>
                    <AiFillWindows size={35} />
                    &nbsp;
                    Download for windows
                </button>
            </div>
        </div>
    )
}

export default Cart