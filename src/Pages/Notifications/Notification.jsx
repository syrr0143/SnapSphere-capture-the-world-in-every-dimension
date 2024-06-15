import React, { useState } from 'react';
import { Drawer, Button, Typography, IconButton } from '@material-tailwind/react';

const Notification = ({ message }) => (
    <div className="flex m-4 items-center justify-between px-4 py-2 border-b border-gray-200">
        <Typography variant="small" color="white" className="font-normal">
            {message}
        </Typography>
    </div>
);

const Notifications = () => {

    const notifications = [
        "You have a new follower",
        "Your post has been liked",
        "You have a new message",
        "Your comment received a reply",
        "New friend suggestion",
    ];

    return (
        <div className='mt-10 mb-10 lg:w- md:w- sm:w-full w-full min-h-screen text-white m-4'>
            {notifications.map((message, index) => (
                <Notification key={index} message={message} />
            ))}
        </div>


    );
};

export default Notifications;
