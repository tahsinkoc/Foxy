import React from 'react'

function Warsaw() {

    function handleReq(par) {
        fetch(`https://a989-46-196-200-1.eu.ngrok.io/${par}`)
            .then(res => res.json())
            .then(resa => console.log(resa))
    }

    return (
        <div className='flex items-center justify-center'>
            <button onClick={() => handleReq('acik')} className='flex items-center rounded-md my-4 relative md:my-4 transition duration-150 border outline-0 border-darker text-darker py-1 text-[1.1rem] bg-gradient-to-r from-transparent to-transparent  px-6 hover:from-rr hover:to-t hover:text-white mx-2'>
                OPEN
            </button>
            <button onClick={() => handleReq('nem')} className='flex items-center rounded-md my-4 md:my-4 relative transition duration-150 border outline-0 border-darker text-darker py-1 text-[1.1rem] bg-gradient-to-r from-transparent to-transparent  px-6 hover:from-rr hover:to-t hover:text-white mx-2'>
                CLOSE
            </button>
        </div>
    )
}

export default Warsaw