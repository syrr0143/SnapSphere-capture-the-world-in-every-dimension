import React from 'react'
import ReelsCard from './ReelsCard/ReelsCard.jsx'

const Reels = ({ label, icon, isActive, onClick }) => {
    return (
        <div className='w-auto h-auto flex items-center gap-1 flex-wrap '>
            <ReelsCard />
        </div>
    )
}

export default Reels
