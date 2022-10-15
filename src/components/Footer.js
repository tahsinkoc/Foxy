import React from 'react'
import { AiFillWindows } from 'react-icons/ai'
import { GiFox } from 'react-icons/gi'
import { AiOutlineCopyright } from 'react-icons/ai'

function Footer() {
    return (
        <div>
            <div className="w-11/12 mx-auto mt-12 xl:w-full text-center h-56 rounded-xl flex flex-col items-center justify-center bg-gradient-to-r from-rr to-t">
                <p className='text-white text-[1.8em]'>Ready to rank up? Join the pros and download Foxy today.</p>
                <button className='flex items-center rounded-md mt-8 bg-white border outline-0 border-white text-bg py-3 text-[1rem] px-6'>
                    <AiFillWindows size={35} />
                    &nbsp;
                    Download for windows
                </button>
            </div>
            <div className="max-w-screen-2xl text-rr mx-auto py-12 grid grid-cols-1 xl:grid-cols-2">
                <div>
                    <img src="/assets/logo_2.png" className='w-[10rem] xl:w-48 mx-auto xl:mx-0' alt="" />
                    <button className='w-11/12 mx-auto xl:mx-0 xl:w-72 flex items-center rounded-md mt-8 bg-gradient-to-r from-pink to-purple outline-0 outline-0 border-white text-white py-3 text-[1rem] px-6'>
                        <AiFillWindows size={35} />
                        &nbsp;
                        Download for windows
                    </button>
                </div>
                <div className='grid grid-cols-1 xl:grid-cols-3 mt-12 xl:mt-0'>
                    <div className="w-11/12 my-4 xl:w-56 flex flex-col mx-auto xl:mx-0">
                        <p className='text-secondTextColor mb-4 text-[1.1rem] border-b py-2 border-secondTextColor'>Company</p>
                        <a href="#" className='text-white hover:text-secondTextColor my-2'>
                            About US
                        </a>
                        <a href="#" className='text-white hover:text-secondTextColor my-2'>
                            FAQ
                        </a>
                    </div>
                    <div className="w-11/12 my-4 xl:w-56 flex flex-col mx-auto xl:mx-0">
                        <p className='text-secondTextColor mb-4 text-[1.1rem] border-b py-2 border-secondTextColor'>Social Media</p>
                        <a href="#" className='text-white hover:text-secondTextColor my-2'>
                            Twitter
                        </a>
                        <a href="#" className='text-white hover:text-secondTextColor my-2'>
                            Instagram
                        </a>
                        <a href="#" className='text-white hover:text-secondTextColor my-2'>
                            Discord
                        </a>
                    </div>
                    <div className="w-11/12 my-4 xl:w-56 flex flex-col mx-auto xl:mx-0">
                        <p className='text-secondTextColor mb-4 text-[1.1rem] border-b py-2 border-secondTextColor'>Supported Games</p>
                        <a href="#" className='text-white hover:text-secondTextColor my-2'>
                            League of Legends
                        </a>
                        <a href="#" className='text-white hover:text-secondTextColor my-2'>
                            Valorant
                        </a>
                        <a href="#" className='text-secondTextColor my-2'>
                            Apex Legends
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full bg-ft text-white py-7">
                <div className="max-w-screen-2xl mx-auto grid grid-cols-1 xl:grid-cols-4">
                    <p className='flex w-11/12 xl:w-full col-span-3 items-center mx-auto my-0 xl:my-2'><AiOutlineCopyright /> &nbsp; 2022 All rights Reserved, Foxy 2022</p>
                    <div className="flex w-11/12 xl:w-full mx-auto justify-start flex-col xl:flex-row xl:justify-end my-0 xl:my-2">
                        <a href="#" className='text-secondTextColor my-2 xl:my-0 mx-0 xl:mx-2'>
                            Privacy Policy
                        </a>
                        <a href="#" className='text-secondTextColor my-2 xl:my-0 mx-0 xl:mx-2'>
                            Terms of use
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer