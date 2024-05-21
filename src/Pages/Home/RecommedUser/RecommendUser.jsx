import React from 'react'
import ProfileNav from './profilenav/ProfileNav';
import { Link } from 'react-router-dom';

const RecommendUser = () => {
    const recommendUserData = [
        {
            id: 1,
            username: "mountains.men",
            profileImg: "https://source.unsplash.com/random/?mountain,climber",
            follow: "Follow",
        },
        {
            id: 2,
            username: "motivation_quotes",
            profileImg: "https://source.unsplash.com/random/?quotes",
            follow: "Follow",
        },
        {
            id: 3,
            username: "photographer",
            profileImg: "https://source.unsplash.com/random/?photographer",
            follow: "Follow",
        },
        {
            id: 4,
            username: "vlogger_around",
            profileImg: "https://source.unsplash.com/random/?vlogger",
            follow: "Follow",
        },
        {
            id: 5,
            username: "peace_of_mind",
            profileImg: "https://source.unsplash.com/random/?road,travel",
            follow: "Follow",
        },
    ];

    return (
        <div className='w-full h-auto py-3'>
            <ProfileNav />
            <div className='w-full h-auto my-8'>
                <div className='w-full h-auto flex items-center justify-between'>
                    <h6 className='text-sm text-gray-400 m-4 font-medium'>
                        Suggestions for you
                    </h6>
                    <Link to={'/'} className='text-xs font-semibold text-gray-300 hover:text-gray-600'>See All
                    </Link>
                </div>
                {recommendUserData.map((users) => (
                    <div key={users.id} className='w-full h-auto flex items-center justify-between mb-4'>
                        <Link to={'/profile'} className='w-full h-auto flex items-center gap-x-2 '>
                            <img src={users.profileImg} alt={users.username} className='w-12 h-12 object-cover rounded-full' />
                            <div className='flex items-start gap-y-0 flex-col '>
                                <p className='text-[0.9rem] text-white font-medium mb-0'>{users.username}</p>
                                <h6 className='text-xs text-gray-500 font-normal'>Suggested For you </h6>
                            </div>
                        </Link>
                        <Link to={'/'} className='text-[0.855rem] text-blue-500 hover:text-gray-200'>{users.follow}</Link>
                    </div>
                ))}
            </div>
            {/* this below section can have detals like about privacy help jobs career etc */}
            {/* <div className='w-full h-auto '>
                <div className='w-full h-auto flex items-center gap-x-[4px] flex-wrap mb-3'>hello</div>
            </div> */}
        </div>
    )
}

export default RecommendUser
