import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import liked from '../../../../../Icons/Like/liked.png'
import commented from '../../../../../Icons/Comment/commented.png'
import { UserContext } from '../../../../../Context/UserContext'

const Postacrd = () => {
    const { userPosts } = useContext(UserContext);

    return (
        <>
            {userPosts?.map((reel) => (
                <Link to={'/'} key={reel?.post?._id} className='lg:w-[32.675%] md:w-[24.675%] sm:w-[32.5%] lg:h-[48vh] md:h-[40vh] sm:h-[35vh] h-[30vh] relative group'>
                    <img src={reel?.post?.imageurl} alt={reel?.post?.title} className='w-full h-full object-cover' style={{
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '10px'
                    }} />
                    <div className="hidden group-hover:flex items-center justify-center gap-x-3 absolute top-[50%] translate-x-[50%]">
                        <div className='flex items-center gap-x-1 '>
                            <img src={commented} alt="commented" className='w-6 h-6' />
                            <p className='text-base text-white font-medium'>{reel?.post?.comments.length}</p>
                            <img src={liked} alt="liked" className='w-6 h-6' />
                            <p className='text-base text-white font-medium'>{reel?.post?.likes.length}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default Postacrd
