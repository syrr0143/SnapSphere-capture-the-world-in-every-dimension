import React from 'react'
import reel1 from '../../../../../assets/reel/reel1.mp4'
import reel2 from '../../../../../assets/reel/reel2.mp4'
import reel3 from '../../../../../assets/reel/reel3.mp4'
import reel4 from '../../../../../assets/reel/reel4.mp4'
import reel5 from '../../../../../assets/reel/reel5.mp4'
import liked from '../../../../../Icons/Like/liked.png'
import commented from '../../../../../Icons/Comment/commented.png'
import { Link } from 'react-router-dom'
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
    return (
        <>
            {reelsData.map((reel, index) => (
                <Link to={'/'} key={index} className='lg:w-[32.675%] md:w-[24.675%] sm:w-[32.5%] lg:h-[48vh] md:h-[40vh] sm:h-[35vh] h-[30vh]   relative group '
                    style={{
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '10px'
                    }}>
                    <video src={reel.video} loop muted autoPlay title='reel video' className='w-full h-full object-cover' />
                    <div className="hidden group-hover:flex items-center justify-center gap-x-3 absolute top-[50%] translate-x-[50%]">
                        <div className='flex items-center gap-x-1 '>
                            <img src={commented} alt="commented" className='w-6 h-6' />
                            <p className='text-base text-white font-medium'>{reel.commentCount}</p>
                            <img src={liked} alt="commented" className='w-6 h-6' />
                            <p className='text-base text-white font-medium'>{reel.likeCount}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default ReelsCard
