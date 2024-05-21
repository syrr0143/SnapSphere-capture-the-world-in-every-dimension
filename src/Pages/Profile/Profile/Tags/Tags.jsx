import React from 'react'
import { Link } from 'react-router-dom'
import TagCard from './TagCard/TagCard.jsx'
const Tags = ({ label, icon, isActive, onClick }) => {
    return (
        <div className='w-full h-auto flex items-center gap-1 flex-wrap overflow-scroll'>
            <TagCard />
        </div>
    )
}

export default Tags
