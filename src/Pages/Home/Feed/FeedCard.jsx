import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import TextEllipse from '../Stories/TextEllipse/TextEllipse';
import Ellipse from '../../../Icons/Ellipse/Ellipse.jsx'
import Like from '../../../Icons/Like/Like.jsx'
import Comment from '../../../Icons/Comment/Comment.jsx'
import Share from '../../../Icons/Share/Share.jsx'
import Save from '../../../Icons/Save/Save.jsx'
import Emoji from '../../../Icons/Emoji/Emoji.jsx'
import { PostContext, PostProvider } from '../../../Context/posts/PostToShow.jsx'

const timeSince = (date) => {
    const now = new Date();
    const seconds = Math.floor((now - new Date(date)) / 1000);

    let interval = Math.floor(seconds / 604800); // Seconds in one week

    if (interval >= 1) {
        return interval === 1 ? interval + " w" : interval + " w";
    }
    interval = Math.floor(seconds / 86400); // Seconds in one day
    if (interval >= 1) {
        return interval === 1 ? interval + " d" : interval + " d";
    }
    interval = Math.floor(seconds / 60); // Seconds in one minute
    if (interval >= 1) {
        return interval === 1 ? interval + " m" : interval + " m";
    }
    return Math.floor(seconds) === 1 ? Math.floor(seconds) + " s" : Math.floor(seconds) + " s";
};

const FeedCard = () => {
    const { AllPosts } = useContext(PostContext);

    return (
        <>
            {AllPosts?.map((posts) => (
                <div key={posts?._id} className='w-full h-auto mb-6'>
                    <div className='w-full h-auto flex items-center justify-between mb-2'>
                        <div className='flex items-center gap-x-2'>
                            <Link to={'#'} className='flex items-center justify-center flex-col flex-shrink-0'>
                                <div className='w-10 h-10 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#ffd89b] to-[#19547b]'>
                                    <img src={posts?.imageurl} alt={posts?.imageurl} className='rounded-full w-full h-full object-cover bg-black p-[2.5px]' />
                                </div>
                            </Link>
                            <div className='flex  items-center gap-x-2'>
                                <p className='text-white text-sm font-medium'>{posts?.user}</p>
                                <div className='w-1 h-1 bg-gray-500 rounded-full'></div>
                                <p className='text-white text-sm font-medium'>{posts?.createdAt ? timeSince(posts.createdAt) : 'N/A'}
                                </p>
                            </div>
                        </div>
                        <Ellipse />
                    </div>
                    <div className='w-full lg:max-h-[75vh] md:max-h-[70vh] sm:max-h-[65vh] max-h-[50vh] lg:h-[70vh] md:lg-h-[60vh] sm:h-[50vh] h-[50vh] lg:min-h-[65vh]  md:min-h-[55vh] sm:min-h-[50vh] min-h-[45vh] border border-gray-300 rounded overflow-hidden mb-3 display contents'>
                        <img src={posts?.imageurl} alt={posts?.title} className=' w-auto h-full rounded object-center' />
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
                            <img src={posts?.mutualFrndImg1} alt={posts?.comments.length} className='w-5 h-5 rounded-full object-fill p-[1.5px] bg-black ' />
                            <img src={posts?.mutualFrndImg2} alt={posts?.likes.length} className='w-5 h-5 rounded-full object-fill p-[1.5px] bg-black -ml-3' />
                        </div>
                        {posts.likes.length} Likes
                    </Link>

                    <div className='w-full h-auto flex items-center gap-x-1 '>
                        <div className='w-full h-auto text-sm text-gray-200 font-thin'>
                            <Link to={'/'} className='text-white font-medium text-sm me-1'>
                                {posts?.user}
                            </Link>
                            {posts?.description}
                            <Link to={'/'} className='text-gray-400  text-sm ms-1'>
                                more
                            </Link>
                        </div>
                    </div>
                    <Link to={'/'} className='text-gray-400 font-normal my-2'>
                        View all {posts?.comments.length} Comments
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
