import React from 'react'
import { GiFox } from 'react-icons/gi'
import { BsCheck2Circle } from 'react-icons/bs'
import { RiCloseCircleLine } from 'react-icons/ri'
import { AiFillWindows } from 'react-icons/ai'

function Prices() {
    return (
        <div className='w-full mx-auto bg-gradient-to-r from-rbg to-tbg my-28 min-h-screen flex flex-col items-center justify-center'>
            <div className='max-w-screen-2xl mx-auto my-6 text-center'>
                <p className='text-[4rem] font-bold text-white'>Plans</p>
                <p className='text-[1.2rem] font-bold text-secondTextColor'>
                    Check out your favorite plan.
                </p>
            </div>
            <div className="w-full xl:max-w-screen-2xl my-8 mx-auto grid grid-cols-1 xl:grid-cols-3 gap-12">
                <div className="w-11/12 xl:w-[31rem] rounded-xl shadow-lg shadow-bg bg-SL h-full mx-auto min-h-[38rem]">
                    <div className="items-center justify-center flex w-full text-rr my-8">
                        <GiFox size={100} />
                    </div>
                    <p className='text-white text-center text-[2rem]'>Free Plan</p>
                    <p className='text-green text-center text-[1.1rem]'>Using ads</p>
                    <div className="w-8/12 bg-rr h-[.1rem] mx-auto my-4">
                        -
                    </div>
                    <div className="w-8/12 flex items-center mx-auto my-2">
                        <p className='text-rr'>
                            <BsCheck2Circle size={30} />
                        </p>
                        <p className='text-white mx-4 text-[1.5rem]'>In app ads</p>
                    </div>
                    <div className="w-8/12 flex items-center mx-auto my-2">
                        <p className='text-rr'>
                            <BsCheck2Circle size={30} />
                        </p>
                        <p className='text-white mx-4 text-[1.5rem]'>Auto rune setup</p>
                    </div>
                    <div className="w-8/12 flex items-center mx-auto my-2">
                        <p className='text-rr'>
                            <BsCheck2Circle size={30} />
                        </p>
                        <p className='text-white mx-4 text-[1.5rem]'>Showing Stats</p>
                    </div>
                    <div className="w-8/12 flex items-center mx-auto my-2">
                        <p className='text-rr'>
                            <RiCloseCircleLine size={30} />
                        </p>
                        <p className='text-white mx-4 text-[1.5rem]'>Personolized feedback</p>
                    </div>
                    <div className="w-8/12 flex items-center mx-auto my-2">
                        <p className='text-rr'>
                            <RiCloseCircleLine size={30} />
                        </p>
                        <p className='text-white mx-4 text-[1.5rem]'>Personolized Analyze</p>
                    </div>
                    <div className="w-8/12 flex items-center mx-auto my-2">
                        <p className='text-rr'>
                            <RiCloseCircleLine size={30} />
                        </p>
                        <p className='text-white mx-4 text-[1.5rem]'>PT service</p>
                    </div>
                    <div className="w-full">
                        <button className='flex mx-auto w-8/12 items-center justify-center rounded-md my-8 py-3 text-[1.1rem] bg-gradient-to-r from-rr to-t  px-6 text-white'>
                            {/* <AiFillWindows size={35} /> */}
                            Get Plan
                        </button>
                    </div>
                </div>
                <div className="w-11/12 xl:w-[31rem] rounded-xl shadow-lg shadow-bg bg-SL h-full mx-auto min-h-[38rem]">
                    <div className="items-center justify-center flex w-full text-pink my-8">
                        <GiFox size={100} />
                    </div>
                    <p className='text-white text-center text-[2rem]'>Economic Plan</p>
                    <p className='text-rr text-center text-[1.1rem]'>14,99 € / Mounth</p>
                    <div className="w-8/12 bg-pink h-[.1rem] mx-auto my-4">
                        -
                    </div>
                    <div className="w-8/12 flex items-center mx-auto my-2">
                        <p className='text-pink'>
                            <BsCheck2Circle size={30} />
                        </p>
                        <p className='text-white mx-4 text-[1.5rem]'>In app ads</p>
                    </div>
                    <div className="w-8/12 flex items-center mx-auto my-2">
                        <p className='text-pink'>
                            <BsCheck2Circle size={30} />
                        </p>
                        <p className='text-white mx-4 text-[1.5rem]'>Auto rune setup</p>
                    </div>
                    <div className="w-8/12 flex items-center mx-auto my-2">
                        <p className='text-pink'>
                            <BsCheck2Circle size={30} />
                        </p>
                        <p className='text-white mx-4 text-[1.5rem]'>Showing Stats</p>
                    </div>
                    <div className="w-8/12 flex items-center mx-auto my-2">
                        <p className='text-pink'>
                            <BsCheck2Circle size={30} />
                        </p>
                        <p className='text-white mx-4 text-[1.5rem]'>Personolized feedback</p>
                    </div>
                    <div className="w-8/12 flex items-center mx-auto my-2">
                        <p className='text-pink'>
                            <RiCloseCircleLine size={30} />
                        </p>
                        <p className='text-white mx-4 text-[1.5rem]'>Personolized Analyze</p>
                    </div>
                    <div className="w-8/12 flex items-center mx-auto my-2">
                        <p className='text-pink'>
                            <RiCloseCircleLine size={30} />
                        </p>
                        <p className='text-white mx-4 text-[1.5rem]'>PT service</p>
                    </div>
                    <div className="w-full">
                        <button className='flex mx-auto w-8/12 items-center justify-center rounded-md my-8 py-3 text-[1.1rem] bg-gradient-to-r from-pink to-purple  px-6 text-white'>
                            {/* <AiFillWindows size={35} /> */}
                            Get Plan
                        </button>
                    </div>
                </div>
                <div className="w-11/12 xl:w-[31rem] rounded-xl shadow-lg shadow-bg bg-SL h-full mx-auto min-h-[38rem]">
                    <div className="items-center justify-center flex w-full text-green my-8">
                        <GiFox size={100} />
                    </div>
                    <p className='text-white text-center text-[2rem]'>PT Plan</p>
                    <p className='text-pink text-center text-[1.1rem]'>39,99 € / Mounth</p>
                    <div className="w-8/12 bg-green h-[.1rem] mx-auto my-4">
                        -
                    </div>
                    <div className="w-8/12 flex items-center mx-auto my-2">
                        <p className='text-green'>
                            <BsCheck2Circle size={30} />
                        </p>
                        <p className='text-white mx-4 text-[1.5rem]'>In app ads</p>
                    </div>
                    <div className="w-8/12 flex items-center mx-auto my-2">
                        <p className='text-green'>
                            <BsCheck2Circle size={30} />
                        </p>
                        <p className='text-white mx-4 text-[1.5rem]'>Auto rune setup</p>
                    </div>
                    <div className="w-8/12 flex items-center mx-auto my-2">
                        <p className='text-green'>
                            <BsCheck2Circle size={30} />
                        </p>
                        <p className='text-white mx-4 text-[1.5rem]'>Showing Stats</p>
                    </div>
                    <div className="w-8/12 flex items-center mx-auto my-2">
                        <p className='text-green'>
                            <BsCheck2Circle size={30} />
                        </p>
                        <p className='text-white mx-4 text-[1.5rem]'>Personolized feedback</p>
                    </div>
                    <div className="w-8/12 flex items-center mx-auto my-2">
                        <p className='text-green'>
                            <BsCheck2Circle size={30} />
                        </p>
                        <p className='text-white mx-4 text-[1.5rem]'>Personolized Analyze</p>
                    </div>
                    <div className="w-8/12 flex items-center mx-auto my-2">
                        <p className='text-green'>
                            <BsCheck2Circle size={30} />
                        </p>
                        <p className='text-white mx-4 text-[1.5rem]'>PT service</p>
                    </div>
                    <div className="w-full">
                        <button className='flex mx-auto w-8/12 items-center justify-center rounded-md my-8 py-3 text-[1.1rem] bg-gradient-to-r from-green to-bl  px-6 text-white'>
                            {/* <AiFillWindows size={35} /> */}
                            Get Plan
                        </button>
                    </div>
                </div>
            </div>
            {/* https://blitz-cdn-videos.blitz.gg/ui/video/Post-Match.webm */}
        </div>
    )
}

export default Prices