import React from 'react'

function Warsaw() {

    function handleReq(par) {
        fetch(`https://a989-46-196-200-1.eu.ngrok.io/${par}`)
            .then(res => res.json())
            .then(resa => console.log(resa))
    }

    return (
        <div>
            <button onClick={() => handleReq('acik')} className='w-full rounded text-start text-white p-2 my-2'>
                OPEN
            </button>
            <button onClick={() => handleReq('nem')} className='w-full rounded text-start text-white p-2 my-2'>
                CLOSE
            </button>
        </div>
    )
}

export default Warsaw