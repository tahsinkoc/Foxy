import React, { useState } from 'react'

function Warsaw() {

    const [ID, setID] = useState('')

    function handleReq(par) {
        fetch(`${ID}${par}`)
            .then(res => res.json())
            .then(resa => console.log(resa))
    }

    return (
        <div className='flex items-center justify-center flex-col'>
            <div className='w-96'>
                <input className='w-full mx-2 my-4 mt-8 py-1 rounded border-rr border-2 bg-transparent px-2 text-white outline-none' onChange={(e) => setID(e.target.value)} value={ID} type="text" />
                <button onClick={() => console.log(ID)} className='mx-2 text-white border-rr border-2 px-2 py-1 rounded bg-rr'>SAVE ID</button>
            </div>
            <div className='w-96'>
                <button onClick={() => handleReq('acik')} className='w-full text-center flex items-center rounded-md my-4 relative md:my-4 transition duration-150 border outline-0 border-darker text-darker py-1 text-[1.1rem] bg-gradient-to-r from-transparent to-transparent  px-6 hover:from-rr hover:to-t hover:text-white mx-2'>
                    <p>OPEN</p>
                </button>
                <button onClick={() => handleReq('nem')} className='w-full text-center flex items-center rounded-md my-4 md:my-4 relative transition duration-150 border outline-0 border-darker text-darker py-1 text-[1.1rem] bg-gradient-to-r from-transparent to-transparent  px-6 hover:from-rr hover:to-t hover:text-white mx-2'>
                    <p>CLOSE</p>
                </button>
            </div>
        </div>
    )
}

export default Warsaw