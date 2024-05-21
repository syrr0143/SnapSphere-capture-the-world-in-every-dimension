import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import LargeNav from '../../Components/Header/LargeNav/LargeNav'
import MobileNav from '../../Components/Header/MobileNav/MobileNav'
import MessageNav from '../../Components/Header/MessageNav/MessageNav.jsx'
import Feed from './Feed/Feed'
import Main from '../Profile/Main.jsx'
import MessagePage from '../../Pages/Chat/Messages/MessagesPage.jsx'
import ReelsPage from '../Reels/ReelsPage.jsx'

const Home = () => {
    const location = useLocation();
    const isMessagePage = location.pathname === '/messages';
    return (
        // this is sidebar removed 
        <div className={!isMessagePage ? 'w-full h-auto flex items-start justify-between lg:gap-x-16  md:gap-x-16 sm:gap-x-8 gap-x-4 relative' : 'w-full h-auto flex items-start justify-between lg:gap-x-6  md:gap-x-16 sm:gap-x-8 gap-x-4 relative'}>
            {/* for large screen size */}

            {/* large nav when chat is opened  */}
            {isMessagePage ? (
                <div className='lg:w-[6%] md:w-[17%] sm:w-none w-none h-[100vh] pt-10 px-3 border-r border-r-gray-500 sticky top-0 left-0 lg:block md:block sm:hidden hidden'>
                    <MessageNav />
                </div>
            ) : (<div className='lg:w-[16%] md:w-[17%] sm:w-none w-none h-[100vh] pt-10 px-3 border-r border-r-gray-500 sticky top-0 left-0 lg:block md:block sm:hidden hidden'>
                <LargeNav />
            </div>)}
            {/* for large screen size */}
            <div className='w-full lg:hidden md:hidden sm:block block'>
                <MobileNav />
            </div>


            <Routes>
                <Route path='/' element={<Feed />} />
                <Route exact path="/profile" element={<Main />} />
                <Route exact path="/messages" element={<MessagePage />} />
                <Route exact path="/reels" element={<ReelsPage />} />

            </Routes>
        </div>
    )
}

export default Home
