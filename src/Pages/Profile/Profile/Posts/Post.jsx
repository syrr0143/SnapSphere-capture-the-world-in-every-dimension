import React from 'react'
import { Link } from 'react-router-dom'
import Postacrd from './PostCard/Postacrd.jsx'

const Post = ({ label, icon, isActive, onClick }) => {

    return (
        <div className='w-full h-auto flex items-center gap-1 flex-wrap overflow-scroll'>
            <Postacrd />
        </div>
    )
}

export default Post
