import React from 'react'
import { Link } from 'react-router-dom'

const ProfileNav = () => {
    return (
        <div className='w-full h-auto flex items-center justify-between mt-24'>
            <Link to={'/profile'} className='w-full h-auto flex items-center gap-x-2'>
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="profile image" className='w-12 h-12 rounded-full ' />
                <div className='flex items-start gap-y-0 flex-col '>
                    <p className='text-[0.9rem] text-white font-medium mb-0 '>Music Lover</p>
                    <h6 className='text-[0.935rem] text-gray-500 font-normal '>Music Lover</h6>
                </div>
            </Link>

            <Link to={'/'} className='text-[0.855rem] text-blue-500 hover:text-gray-200'>Switch</Link>
        </div>
    )
}

export default ProfileNav
