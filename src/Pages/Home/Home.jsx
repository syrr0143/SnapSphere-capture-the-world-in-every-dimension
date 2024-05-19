import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LargeNav from '../../Components/Header/LargeNav/LargeNav'
import MobileNav from '../../Components/Header/MobileNav/MobileNav'
import Feed from './Feed/Feed'

const Home = () => {
    return (
        // this is sidebar 
        <div className='w-full h-auto flex items-start justify-between lg:gap-x-32 md:gap-x-16 sm:gap-x-8 gap-x-4 relative'>
            {/* for large screen size */}
            <div className='lg:w-[16%] md:w-[17%] sm:w-none w-none h-[100vh] pt-10 px-3 border-r border-r-gray-500 sticky top-0 left-0 lg:block md:block sm:hidden hidden'>
                <LargeNav />

            </div>

            {/* for large screen size */}
            <div className='w-full lg:hidden md:hidden sm:block block'>
                <MobileNav />
            </div>

            <Routes>
                <Route path='/' element={<Feed />} />
                {/* <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/blog-details' element={<BlogDetails />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/faq' element={<Faq />} />
                <Route path='/team' element={<Team />} />
                <Route path='/team-details' element={<TeamDetails />} />
                <Route path='/404' element={<NotFound />} />
                <Route path='*' element={<NotFound />} /> */}
            </Routes>
        </div>
    )
}

export default Home
