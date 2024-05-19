import React from 'react'
import TopNav from '../../../Components/Header/TopNav/TopNav'
import Stories from '../Stories/Stories'
import FeedCard from './FeedCard'
import RecommendUser from '../RecommedUser/RecommendUser'

const Feed = () => {

    return (
        <div className='lg:w-[74%] md:w-[83%] sm:w-full min-h-screen lg:py-7 md:py-7 sm:py-4 py-3 px-3 flex items-start gap-x-20'>
            <div className='lg:w-[60%] md:w-full sm:w-full h-auto relative'>
                <TopNav />
                <Stories />
                <div className='w-full h-auto flex items-center justify-center mt-6'>
                    <div className='lg:w-[73%] md:w-[73%] sm:w-[80%] w-[80%] h-auto'>
                        <FeedCard />
                    </div>
                </div>
            </div>
            {/* recommend user section */}
            <div className='w-[25%] h-auto lg:block md:hidden sm:hidden hidden'>
                <RecommendUser />
            </div>
        </div>
    )
}

export default Feed
