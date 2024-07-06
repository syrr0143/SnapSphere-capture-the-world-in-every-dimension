import React, { useContext } from 'react'
import reel1 from '../../../../../assets/reel/reel1.mp4'
import reel2 from '../../../../../assets/reel/reel2.mp4'
import reel3 from '../../../../../assets/reel/reel3.mp4'
import reel4 from '../../../../../assets/reel/reel4.mp4'
import reel5 from '../../../../../assets/reel/reel5.mp4'
import liked from '../../../../../Icons/Like/liked.png'
import commented from '../../../../../Icons/Comment/commented.png'
import { Link } from 'react-router-dom'
import { UserContext } from '../../../../../Context/UserContext.jsx'
const ReelsCard = () => {
    const reelsData = [
        {
            id: 1,
            video: reel1, // import the video from the assets folder
            likeCount: "10k",
            commentCount: "3k",
        },
        {
            id: 2,
            video: reel2, // import the video from the assets folder
            likeCount: "10k",
            commentCount: "3k",
        },
        {
            id: 3,
            video: reel3, // import the video from the assets folder
            likeCount: "10k",
            commentCount: "3k",
        },
        {
            id: 4,
            video: reel4, // import the video from the assets folder
            likeCount: "10k",
            commentCount: "3k",
        },
        {
            id: 5,
            video: reel5, // import the video from the assets folder
            likeCount: "10k",
            commentCount: "3k",
        },
        {
            id: 4,
            video: reel4, // import the video from the assets folder
            likeCount: "10k",
            commentCount: "3k",
        },
        {
            id: 5,
            video: reel5, // import the video from the assets folder
            likeCount: "10k",
            commentCount: "3k",
        },
        {
            id: 4,
            video: reel4, // import the video from the assets folder
            likeCount: "10k",
            commentCount: "3k",
        },
        {
            id: 5,
            video: reel5, // import the video from the assets folder
            likeCount: "10k",
            commentCount: "3k",
        },
    ];
    const { fetchsavedpost } = useContext(UserContext);


    return (
        <>
            {fetchsavedpost.map((reel) => (
                <Link to={'/'} key={reel?.post?._id} className='lg:w-[32.675%] md:w-[24.675%] sm:w-[32.5%] lg:h-[48vh] md:h-[40vh] sm:h-[35vh] h-[30vh]   relative group '
                    style={{
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '10px'
                    }}>
                    {/\.(mp4|webm|ogg)$/.test(reel?.post?.imageurl) ? (
                        <video src={reel?.post?.imageurl} className='w-auto h-full border-gray-500 border-solid border rounded object-center'>
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img src={reel?.post?.imageurl} className='w-auto h-full rounded object-center object-cover min-w-full border-gray-500 border-solid border' />
                    )}
                    <div className="hidden group-hover:flex items-center justify-center gap-x-3 absolute top-[50%] translate-x-[50%]">
                        <div className='flex items-center gap-x-1 mx-auto'>
                            <img src={commented} alt="commented" className='w-6 h-6' />
                            <p className='text-base text-white font-medium'>{reel?.comments?.length}</p>
                            <img src={liked} alt="commented" className='w-6 h-6' />
                            <p className='text-base text-white font-medium'>{reel?.likes?.length}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default ReelsCard
