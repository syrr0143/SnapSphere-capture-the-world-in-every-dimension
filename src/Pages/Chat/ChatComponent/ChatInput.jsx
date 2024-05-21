import React from 'react'
import send from '../../../Icons/send/send.png'
const ChatInput = () => {
    return (
        <label className="input input-bordered flex items-center gap-2 mr-3 ml-3">
            <input type="text" className="grow text-gray-600 text-ellipsis font-bold" placeholder="Search" />
            <img className='w-8 cursor-pointer' src={send} alt="" />

        </label>
    )
}

export default ChatInput
