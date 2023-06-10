import React, { useEffect, useState } from 'react'

function Warsaw() {

    const [ID, setID] = useState('')

    const [wet, setWet] = useState()

    function handleReq(par) {
        fetch(`${ID}${par}`)
            .then(res => res.json())
            .then(resa => console.log(resa))
    }

    const [data, setData] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://1b27-46-196-200-1.eu.ngrok.io/nem');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Veri alınırken bir hata oluştu:', error);
            }
        };

        fetchData();
    }, [data]);

    return (
        <div className='flex items-center justify-center flex-col'>
            <div className='w-96'>
                <input className='w-full mx-2 my-4 mt-8 py-1 rounded border-rr border-2 bg-transparent px-2 text-white outline-none' onChange={(e) => setID(e.target.value)} value={ID} type="text" />
                <button onClick={() => console.log(ID)} className='mx-2 text-white border-rr border-2 px-2 py-1 rounded bg-rr'>SAVE ID</button>
            </div>
            <div className='w-96'>
                <button onClick={() => handleReq('run')} className='w-full text-center flex items-center rounded-md my-4 relative md:my-4 transition duration-150 border outline-0 border-darker text-darker py-1 text-[1.1rem] bg-gradient-to-r from-transparent to-transparent  px-6 hover:from-rr hover:to-t hover:text-white mx-2'>
                    <p>OPEN MOTOR</p>
                </button>
                <button onClick={() => handleReq('stop')} className='w-full text-center flex items-center rounded-md my-4 relative md:my-4 transition duration-150 border outline-0 border-darker text-darker py-1 text-[1.1rem] bg-gradient-to-r from-transparent to-transparent  px-6 hover:from-rr hover:to-t hover:text-white mx-2'>
                    <p>CLOSE MOTOR</p>
                </button>
                <button onClick={() => handleReq('nem')} className='w-full text-center flex items-center rounded-md my-4 md:my-4 relative transition duration-150 border outline-0 border-darker text-darker py-1 text-[1.1rem] bg-gradient-to-r from-transparent to-transparent  px-6 hover:from-rr hover:to-t hover:text-white mx-2'>
                    <p>CLOSE</p>
                </button>
            </div>
            <div>
                <p className='text-white text-2xl'>{data.wet}</p>
            </div>
        </div>
    )
}

export default Warsaw