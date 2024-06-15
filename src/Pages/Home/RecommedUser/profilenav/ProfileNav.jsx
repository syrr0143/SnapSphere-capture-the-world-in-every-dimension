import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext, UserProvider } from '../../../../Context/UserContext.jsx'
const ProfileNav = () => {
    const { userDetails } = useContext(UserContext);
    return (
        <div className='w-full h-auto flex items-center justify-between mt-24'>
            <Link to={'/profile'} className='w-full h-auto flex items-center gap-x-2'>
                <img src={userDetails?.avatar} alt="profile image" className='w-12 h-12 rounded-full ' />
                <div className='flex items-start gap-y-0 flex-col '>
                    <p className='text-[0.9rem] text-white font-medium mb-0 capitalize'>{userDetails?.name}</p>
                    <h6 className='text-[0.935rem] text-gray-500 font-normal '>Music Lover</h6>
                </div>
            </Link>

            <Link to={'/'} className='text-[0.855rem] text-blue-500 hover:text-gray-200'>Switch</Link>
        </div>
    )
}

export default ProfileNav
