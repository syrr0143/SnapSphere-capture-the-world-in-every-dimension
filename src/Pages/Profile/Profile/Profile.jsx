import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Settings from '../../../Icons/Settings/Settings.jsx'
import LinkIcon from '../../../Icons/LinkIcon/LinkIcon.jsx'
import Reels from './Reels/Reels.jsx'
import Tabs from './Tabs/Tabs.jsx'
import posticon from '../../../Icons/Post/post.png'
import reelicon from '../../../Icons/Reel/reel.png'
import tagicon from '../../../Icons/Tag/tag.png'
import Post from './Posts/Post.jsx'
import Tags from './Tags/Tags.jsx'
const Profile = () => {
    const [activeTab, setActiveTab] = useState("posts");
    const [isContentVisible, setisContentVisible] = useState(true);
    const handletabclick = (tab) => {
        console.log(tab)
        setisContentVisible(false);
        setTimeout(() => {
            setActiveTab(tab);
            setisContentVisible(true);
        }, 300);
    }

    const highlightData = [
        {
            id: 1,
            img: "https://source.unsplash.com/random/?flower",
            name: "Flowers",
        },
        {
            id: 2,
            img: "https://source.unsplash.com/random/?adventure",
            name: "Adventures",
        },
        {
            id: 3,
            img: "https://source.unsplash.com/random/?mountians",
            name: "Mountians",
        },
        {
            id: 4,
            img: "https://source.unsplash.com/random/?lakes",
            name: "Lakes",
        },
        {
            id: 5,
            img: "https://source.unsplash.com/random/?nature",
            name: "Nature",
        },
        {
            id: 6,
            img: "https://source.unsplash.com/random/?animals",
            name: "Animals",
        },
        {
            id: 7,
            img: "https://source.unsplash.com/random/?photography",
            name: "Photography",
        },
        {
            id: 8,
            img: "https://source.unsplash.com/random/?wildlife",
            name: "Wildlife",
        },
    ];

    return (
        <div className='lg:w-[88%] md:w-[88%] sm:w-full w-full h-auto lg:block md:block sm:hidden hidden '>
            {/* your info section */}
            <div className='w-full h-auto flex items-center lg:gap-x-20 md:gap-x-16 sm:gap-x-12 gap-x-8 justify-center mb-10'>
                <img src="https://source.unsplash.com/random/?face" alt="" className='rounded-full lg:w-44 md:w-44 sm:w-36 w-32 lg:h-44 md:h-44 sm:h-36 h-36 object-cover' />
                <div className='flex items-start flex-col'>
                    <div className='flex items-center gap-x-5 mb-4'>
                        <Link to={"/profile"} className='text-lg text-gray-200 font-bold'>Sumit yadav</Link>
                        <div className='flex items-center gap-x-2'>
                            <button className='bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150'>Edit Profile</button>
                            <button className='bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150'>View Archive</button>
                        </div>
                        <Settings />
                    </div>
                    <div className='flex items-center gap-x-6 mb-4'>
                        <h6 className='text-base text-gray-100 font-normal '>100 Posts</h6>
                        <Link to={'/'} className='text-base text-gray-100 font-normal '>426 mn Followers</Link>
                        <Link to={'/'} className='text-base text-gray-100 font-normal '>426 Following</Link>

                    </div>
                    {/* fullname */}
                    <p className='text-base text-gray-100 font-bold mb-4'>Sumit yadav</p>
                    {/* bio */}
                    <p className='text-base text-gray-100 font-normal mb-4'>
                        jay shree ram <br />
                        jay shree ram <br />
                        jay shree ram <br />
                        jay shree ram <br />

                    </p>
                    <p className='text-base text-gray-100 font-normal  flex items-center gap-x-2 '>
                        <LinkIcon />
                        <Link to={'/'} className='hover:underline font-medium text-blue-500'>www.google.com</Link>
                    </p>
                </div>
            </div>
            {/* highlights section */}
            <div className='w-full h-auto flex items-center gap-x-9 mb-10 justify-center'>
                <div className=' max-w-[61vw] w-full h-auto flex items-center gap-x-3.5 justify-center overflow-x-scroll'>
                    {highlightData.map((data) => (
                        <Link to={'/'} key={data.id} className='flex items-center justify-between flex-col flex-shrink-0'>
                            <div className='w-16 h-16 object-cover rounded-full p-[2px] bg-gradient-to-r from-[#1d1d1d] to-[#c7bbbb]'>
                                <img src={data.img} alt={data.name} className='rounded-full h-full w-full object-cover bg-black p-[2.5px]' />

                            </div>
                            <p className='mt-1 text-sm text-white '>{data.name}</p>
                        </Link>
                    ))}
                </div>
            </div>
            {/* posts */}

            <div className='w-full h-auto flex items-center gap-x-9 mb-10'>
                <div className='w-full h-full flex items-center justify-center gap-x-6 mb-4 border-t border-[#313131]'>
                    <Tabs label={"POSTS"}
                        icon={posticon}
                        isActive={activeTab === 'posts'}
                        onClick={() => handletabclick('posts')}
                    />
                    <Tabs label={"REELS"}
                        icon={reelicon}
                        isActive={activeTab === 'reels'}
                        onClick={() => handletabclick('reels')}
                    />
                    <Tabs label={"TAGGED"}
                        icon={tagicon}
                        isActive={activeTab === 'tagged'}
                        onClick={() => handletabclick('tagged')}
                    />

                </div>
            </div>
            <div className={`mt-4 transition-opacity duration-300 ease-out ${isContentVisible ? "opacity-100" : "opacity-0"} `}>
                {activeTab === 'posts' && <Post />}
                {activeTab === 'reels' && <Reels />}
                {activeTab === 'tagged' && <Tags />}
            </div>
        </div>
    )
}

export default Profile
