import React from 'react';
import { Link } from 'react-router-dom';
import InstagramLogo from '../../../assets/logo/instagram.png';
import InstagramIcon from '../../../assets/logo/icon.png';
import SearchLogo from '../../../assets/navlogo/search.png';
import ExploreLogo from '../../../assets/navlogo/explore.png';
import ReelsLogo from '../../../assets/navlogo/reel.png';
import MessagesLogo from '../../../assets/navlogo/message.png';
import CreateLogo from '../../../assets/navlogo/create.png';
import NotificationsLogo from '../../../assets/navlogo/like.png';
import HomeLogo from '../../../assets/navlogo/home.png';


const MobileNav = () => {
    const sidebarItems = [
        {
            name: "Home",
            link: "/",
            icon: HomeLogo,
        },
        {
            name: "Search",
            link: "/search",
            icon: SearchLogo,
        },
        // {
        //     name: "Explore",
        //     link: "/explore",
        //     icon: ExploreLogo,
        // },
        {
            name: "Reels",
            link: "/reels",
            icon: ReelsLogo,
        },
        {
            name: "Messages",
            link: "/messages",
            icon: MessagesLogo,
        },
        // {
        //     name: "Notifications",
        //     link: "/notifications",
        //     icon: NotificationsLogo,
        // },
        // {
        //     name: "Create",
        //     link: "/create",
        //     icon: CreateLogo,
        // },

    ];
    return (
        <div className='w-full h-16 fixed bottom-0 bg-gray-900 lg:hidden flex justify-between items-center px-4 py-2'>
            {sidebarItems.map((item, index) => (
                <Link key={index} to={item.link} className="flex flex-col items-center justify-center text-white">
                    <img src={item.icon} alt={item.name} className="w-6 h-6" />
                    <span className="text-xs">{item.name}</span>
                </Link>
            ))}
            <Link to='/profile' className="flex flex-col items-center justify-center text-white">
                <img src="https://source.unsplash.com/random?profile" alt="profile icon" className="w-6 h-6 object-cover rounded-full" />
                <span className="text-xs">Profile</span>
            </Link>
        </div>
    );
};

export default MobileNav;
