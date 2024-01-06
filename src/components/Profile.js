import React, { useEffect, useState } from 'react'
import jwt from 'jwt-client'

function Profile() {

    const [User, setUser] = useState({})
    const [UserData, setUserData] = useState({})
    useEffect(() => {
        const usr = localStorage.getItem('token')
        const dec = jwt.read(usr)
        setUser(dec.claim.check)
        // console.log(Auth.User);
    }, [])

    useEffect(() => {
        if (User) {
            fetch('http://localhost:4575/get-profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(User)
            })
                .then(res => res.json())
                .then(res => {
                    setUserData(res)
                })
        }
    }, [User])

    useEffect(() => {
        console.log(UserData);
    }, [UserData])
    // Checkout for auth.
    return (
        <div className='bg w-full'>
            <title>Profile</title>
            <div className='mx-auto max-w-screen-2xl flex py-24 text-white px-4'>
                <div className='my-12 w-full grid grid-cols-4'>
                    <div className='col-span-1'>
                        <div className='flex border-b border-yellow-400 pb-2'>
                            {UserData &&
                                <div className='w-24 h-2w-24 rounded-full mx-auto'>
                                    <img src={`https://ddragon-webp.lolmath.net/latest/img/profileicon/${UserData.profileIconId}.webp`} className='border-[3px] shadow-md shadow-yellow-700 border-yellow-600 w-24 h-24 rounded-full' alt="" />
                                    <div className='text-center w-full mt-2 text-yellow-600'>
                                        {UserData.summonerLevel} Lvl <br />
                                        {UserData.name}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className='col-span-3'>
                        asdas
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile