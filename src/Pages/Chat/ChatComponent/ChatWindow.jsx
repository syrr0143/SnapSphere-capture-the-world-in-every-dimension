import React from 'react';
import Message from '../Message/Message';
import ChatNavbar from './ChatNavbar';
import ChatInput from './ChatInput';

const ChatWindow = ({ chat }) => {


    return (
        <div className=" w-full overflow-y-auto">

            <div className="sticky top-0 w-full bg-black z-10">
                <ChatNavbar />
            </div>

            <Message />

            <div className="fixed -bottom-2 w-[72vw]  h-16 bg-black">
                <ChatInput />
            </div>
        </div>

    );
};

export default ChatWindow;
