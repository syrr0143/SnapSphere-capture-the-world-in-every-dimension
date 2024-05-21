import React from 'react';
import Sidebar from '../ChatComponent/Sidebar.jsx';
import ChatWindow from '../ChatComponent/ChatWindow.jsx';

const App = () => {
    const [selectedChat, setSelectedChat] = React.useState(null);

    const handleChatSelect = (chat) => {
        setSelectedChat(chat);
    };

    return (
        <div className="flex h-[100vh] w-full bg-black text-white ">
            <Sidebar onSelectChat={handleChatSelect} />
            <ChatWindow chat={selectedChat} />
        </div>
    );
};

export default App;
