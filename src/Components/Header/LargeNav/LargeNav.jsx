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

const LargeNav = () => {
    const ProfileIcon = 'https://source.unsplash.com/random?profile'
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
        {
            name: "Explore",
            link: "/explore",
            icon: ExploreLogo,
        },
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
        {
            name: "Notifications",
            link: "/notifications",
            icon: NotificationsLogo,
        },
        {
            name: "Create",
            link: "/create",
            icon: CreateLogo,
        },
        {
            name: "Profile",
            link: "/profile",
            icon: ProfileIcon,
        },

    ];

    return (
        <div className='w-full h-full relative'>
            <Link to="/" className='mb-10 px-2 lg:block md:hidden sm:hidden hidden'>
                <img src={InstagramLogo} alt="Instagram Logo" className='w-28 h-auto' />
            </Link>
            <Link to="/" className='mb-10 px-2 lg:hidden md:block sm:block block'>
                <img src={InstagramIcon} alt="Instagram Logo" className='w-28 h-auto' />
            </Link>
            <nav className="flex h-auto flex-col items-center justify-center lg:w-48 lg:flex-col lg:items-start lg:justify-start ">
                {sidebarItems.map((item, index) => (
                    <Link key={index} to={item.link} className="flex gap-x-4 p-3 relative bg-transparent hover:bg-gray-800/75 rounded-lg ease-out duration-500 group items-center justify-center lg:justify-start w-14 h-14 lg:w-full lg:h-14">
                        <img
                            src={item.icon}
                            alt={item.name}
                            className={item.name === 'Profile'
                                ? 'w-6 h-6 object-cover rounded-full group-hover:scale-105 ease-out duration-300'
                                : 'w-6 h-6 lg:w-6 lg:h-6'}
                        />
                        {item.name === 'Messages' && (
                            <div className='absolute left-5 top-2 bg-red-600 text-sm text-white rounded-full w-5 h-5 flex items-center justify-center'>
                                9
                            </div>
                        )}
                        <span className={item.name === 'Profile' ? 'text-base  font-medium text-white lg:block md:hidden sm:hidden hidden' : "hidden lg:block ml-2 text-white"}>{item.name}</span>
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default LargeNav;
