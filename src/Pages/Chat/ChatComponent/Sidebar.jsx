import React from 'react';

const chats = [
    { name: 'Kaushal Shelke', lastMessage: 'Last Seen', time: '23h' },
    { name: 'Error_404', lastMessage: 'Last Seen', time: '1d' },
    { name: 'Abhi Yaduvanshi', lastMessage: 'Last Seen', time: '2d' },
    { name: 'Sudeep Verma', lastMessage: 'Last Seen', time: '4d' },
    { name: 'Rudresh Patel', lastMessage: 'Last Seen', time: '4m' },
    { name: 'Veera Yadav', lastMessage: 'Last Seen', time: '1h' },
    { name: 'Svykrmy Katiyar', lastMessage: 'Last Seen', time: '24m' },
];

const Sidebar = ({ onSelectChat }) => {
    return (
        <div className="w-1/4 h-[100vh]  flex flex-col  border-solid border-r-2 border-[#ddd] ">
            <div className="font-bold m-4   border-solid border-[#ddd] ">
                <h2 className='pb-4'>syrr0143</h2>
                <h2>Messages</h2>
            </div>
            <div className="overflow-y-auto">
                {chats.map((chat, index) => (
                    <div key={index} className="flex p-2 cursor-pointer hover:bg-white rounded-lg hover:text-black" onClick={() => onSelectChat(chat)}>
                        <div className="avatar mr-8">
                            <div className="w-16 rounded-full">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center ">
                            <div className=" font-bold ">{chat.name}</div>
                            <div className="text-[#555]  ">{chat.lastMessage} {chat.time}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
