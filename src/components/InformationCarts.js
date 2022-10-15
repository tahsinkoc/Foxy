import React from 'react'
import { GiFox } from 'react-icons/gi'
import { AiFillWindows } from 'react-icons/ai'

function InformationCarts() {
    return (
        <>
            <div className='w-full mx-auto bg-gradient-to-r from-rbg to-tbg my-28 min-h-screen flex items-center justify-center'>
                <div className="max-w-screen-2xl mx-auto grid grid-cols-1 xl:grid-cols-4 gap-12">
                    <div className='w-11/12 xl:w-96 mx-auto h-full'>
                        {/* <div className="w-48 my-12 border-bottom border-white mx-auto text-white items-center flex justify-center animate-pulse">
                        <GiFox size={60} />
                    </div> */}
                        <p className='text-white text-[3.7rem] my-4 font-bold'>
                            Auto
                            <br />
                            Pre-Game
                            Setup & Intel
                        </p>
                        <p className='text-white text-secondTextColor my-4 text-[1.2rem]'>
                            Before each match, Foxy auto-imports optimal setups into your game and gives you the lowdown on your teammates and opponents.
                        </p>
                        <button className='mt-12 flex items-center bg-gradient-to-r from-rr to-t rounded-md outline-0 text-white py-4 px-10 text-[1.3rem] px-6'>
                            {/* <AiFillWindows size={35} /> */}
                            &nbsp;
                            Get The App
                        </button>
                    </div>
                    <div className="w-11/12 mx-auto xl:max-w-[65rem] xl:col-span-3 xl:ml-20 shadow-xl shadow-bg rounded-xl">
                        <video className='w-full h-full rounded-xl' src="https://blitz-cdn-videos.blitz.gg/ui/video/Auto-Pre-Game.webm" mute autoPlay></video>
                    </div>
                </div>
                {/* https://blitz-cdn-videos.blitz.gg/ui/video/Post-Match.webm */}
            </div>
            <div className='w-full mx-auto my-28 min-h-screen flex items-center justify-center'>
                <div className="max-w-screen-2xl mx-auto grid grid-cols-1 xl:grid-cols-4 gap-12">
                    <div className="w-11/12 row-start-2 rounded-xl xl:row-auto mx-auto xl:max-w-[65rem] xl:col-span-3 xl:ml-0 shadow-xl shadow-rbg">
                        <video className='w-full h-full rounded-xl' src="https://blitz-cdn-videos.blitz.gg/ui/video/Post-Match.webm" mute autoPlay></video>
                    </div>
                    <div className='row-start-1 xl:row-auto w-11/12 xl:w-96 mx-auto h-full'>
                        {/* <div className="w-48 my-12 border-bottom border-white mx-auto text-white items-center flex justify-center animate-pulse">
                        <GiFox size={60} />
                    </div> */}
                        <p className='text-white text-[3.7rem] my-4 font-bold'>
                            Personalized
                            Post-Match
                            Feedback
                        </p>
                        <p className='text-white text-secondTextColor my-4 text-[1.2rem]'>
                            Just like a good coach, Blitz helps you learn faster by analyzing your play and delivering targeted feedback after every match.
                        </p>
                        <button className='mt-12 flex items-center bg-gradient-to-r from-rr to-t rounded-md outline-0 text-white py-4 px-10 text-[1.3rem] px-6'>
                            {/* <AiFillWindows size={35} /> */}
                            &nbsp;
                            Get The App
                        </button>
                    </div>
                </div>
                {/* https://blitz-cdn-videos.blitz.gg/ui/video/Post-Match.webm */}
            </div>
        </>
    )
}

export default InformationCarts