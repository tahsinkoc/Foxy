import React, { useState } from 'react'

function Notification({ isOpen, setOpen, message }) {

    const [PrevClass, setPrevClass] = useState([
        'fixed w-full flex items-center justify-center bottom-4 left-0 z-30 text-white transition-all ease-in-out duration-300',
        'fixed w-full flex items-center justify-center bottom-[-100%] left-0 z-30 text-white transition-all ease-in-out duration-300'
    ])
    return (
        <div className={isOpen ? PrevClass[0] : PrevClass[1]}>
            <div className='bg-bg px-12 py-4 rounded shadow-md'>
                {message}
            </div>
        </div>
    )
}

export default Notification