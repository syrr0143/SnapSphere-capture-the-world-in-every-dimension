import React from 'react'
import { Link } from 'react-router-dom';
import TextEllipse from '../Stories/TextEllipse/TextEllipse';
import Ellipse from '../../../Icons/Ellipse/Ellipse.jsx'
import Like from '../../../Icons/Like/Like.jsx'
import Comment from '../../../Icons/Comment/Comment.jsx'
import Share from '../../../Icons/Share/Share.jsx'
import Save from '../../../Icons/Save/Save.jsx'
import Emoji from '../../../Icons/Emoji/Emoji.jsx'
const FeedCard = () => {
    const instagramFeed = [
        {
            id: 1,
            username: "food.explorer",
            time: "1h",
            profileImg: "https://source.unsplash.com/random/?girl",
            postImg: "https://source.unsplash.com/random/?girl",
            mutualFrndImg1: "https://source.unsplash.com/random/?boy",
            mutualFrndImg2: "https://source.unsplash.com/random/?girl",
            likeCount: "2, 00, 000",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            commentCount: "100",
        },
        {
            id: 2,
            username: "nature.lover",
            time: "1h",
            profileImg: "https://source.unsplash.com/random/?adventure",
            postImg: "https://source.unsplash.com/random/?nature",
            mutualFrndImg1: "https://source.unsplash.com/random/?girl",
            mutualFrndImg2: "https://source.unsplash.com/random/?boy",
            likeCount: "2, 00, 000",
            caption:
                "Many touriest came nepal from all over the world to explore the beauty of the land & see the amazing natural places.",
            commentCount: "100",
        },
        {
            id: 3,
            username: "reelsofworld",
            time: "1h",
            profileImg: "https://source.unsplash.com/random/?videography",
            postImg: "https://source.unsplash.com/random/?sport",
            mutualFrndImg1: "https://source.unsplash.com/random/?girl",
            mutualFrndImg2: "https://source.unsplash.com/random/?boy",
            likeCount: "2, 00, 000",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            commentCount: "100",
        },
        {
            id: 4,
            username: "carlover",
            time: "1h",
            profileImg: "https://source.unsplash.com/random/?luxurycar",
            postImg: "https://source.unsplash.com/random/?car",
            mutualFrndImg1: "https://source.unsplash.com/random/?girl",
            mutualFrndImg2: "https://source.unsplash.com/random/?boy",
            likeCount: "2, 00, 000",
            caption:
                "Many touriest came nepal from all over the world to explore the beauty of the land & see the amazing natural places.",
            commentCount: "100",
        },
        {
            id: 5,
            username: "godness",
            time: "1h",
            profileImg: "https://source.unsplash.com/random/?godness",
            postImg: "https://source.unsplash.com/random/?god",
            mutualFrndImg1: "https://source.unsplash.com/random/?boy",
            mutualFrndImg2: "https://source.unsplash.com/random/?girl",
            likeCount: "2, 00, 000",
            caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            commentCount: "100",
        },
    ];
    return (
        <>
            {instagramFeed.map((feed) => (
                <div key={feed.id} className='w-full h-auto mb-6'>
                    <div className='w-full h-auto flex items-center justify-between mb-2'>
                        <div className='flex items-center gap-x-2'>
                            <Link to={'/'} className='flex items-center justify-center flex-col flex-shrink-0'>
                                <div className='w-10 h-10 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#ffd89b] to-[#19547b]'>
                                    <img src={feed.profileImg} alt={feed.profileImg} className='rounded-full w-full h-full object-cover bg-black p-[2.5px]' />
                                </div>
                            </Link>
                            <div className='flex items-center gap-x-2'>
                                <p className='text-white text-sm font-medium'>{feed.username}</p>
                                <div className='w-1 h-1 bg-gray-500 rounded-full'></div>
                                <p className='text-white text-sm font-medium'>{feed.time}</p>
                            </div>
                        </div>
                        <Ellipse />
                    </div>
                    <div className='w-full lg:max-h-[75vh] md:max-h-[70vh] sm:max-h-[65vh] max-h-[50vh] lg:h-[70vh] md:lg-h-[60vh] sm:h-[50vh] h-[50vh] lg:min-h-[65vh]  md:min-h-[55vh] sm:min-h-[50vh] min-h-[45vh] border border-gray-300 rounded overflow-hidden mb-3 display contents'>
                        <img src={feed.postImg} alt={feed.caption} className=' w-auto h-full rounded object-center' />
                    </div>
                    <div className='w-full h-auto flex items-center justify-between'>
                        <div className='flex items-center gap-x-3 '>
                            <Like />
                            <Comment />
                            <Share />
                        </div>
                        <Save />
                    </div>
                    <Link to={'/'} className='w-full h-auto flex items-center gap-x-2 text-base text-gray-200 font-medium my-2'>
                        <div className='flex items-center'>
                            <img src={feed.mutualFrndImg1} alt={feed.likeCount} className='w-5 h-5 rounded-full object-fill p-[1.5px] bg-black ' />
                            <img src={feed.mutualFrndImg2} alt={feed.likeCount} className='w-5 h-5 rounded-full object-fill p-[1.5px] bg-black -ml-3' />
                        </div>
                        {feed.likeCount} Likes
                    </Link>

                    <div className='w-full h-auto flex items-center gap-x-1 '>
                        <div className='w-full h-auto text-sm text-gray-200 font-thin'>
                            <Link to={'/'} className='text-white font-medium text-sm me-1'>
                                {feed.username}
                            </Link>
                            {feed.caption}
                            <Link to={'/'} className='text-gray-400  text-sm ms-1'>
                                more
                            </Link>
                        </div>
                    </div>
                    <Link to={'/'} className='text-gray-400 font-normal my-2'>
                        View all {feed.commentCount} Comments
                    </Link>
                    <div className='w-full h-auto flex items-center justify-between border-b border-b-gray-500'>
                        <input type="text" placeholder="Add a comment" className="w-[90%] h-auto bg-transparent border-none outline-none focus:outline-none text-sm text-gray-400 py-3" />
                        <Emoji />
                    </div>
                </div>
            ))}
        </>
    )
}

export default FeedCard
