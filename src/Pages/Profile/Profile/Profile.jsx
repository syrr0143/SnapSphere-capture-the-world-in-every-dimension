import React, { useEffect, useState, useContext } from 'react'
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
import toast, { Toaster } from 'react-hot-toast';
import { UserContext } from '../../../Context/UserContext.jsx'
const Profile = () => {
    const [activeTab, setActiveTab] = useState("posts");
    const [isContentVisible, setisContentVisible] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const { userDetails, userPosts, userFollowing, Followers } = useContext(UserContext);

    const handletabclick = (tab) => {
        setisContentVisible(false);
        setTimeout(() => {
            setActiveTab(tab);
            setisContentVisible(true);
        }, 300);
    }

    const followUser = async (userId) => {
        try {

            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('No token found!');
                throw new Error('No token found');
            }

            const response = await fetch(`http://localhost:4000/api/v1/user/follow/${userId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                toast.success(data?.message);
            } else {
                const errorData = await response.json();
                toast.error(errorData?.message);
                console.error("error", errorData?.message);
            }
        } catch (error) {
            toast.error('An error occurred while following the user');
            console.error('Error:', error);
        }
    }

    return (
        <div className='lg:w-[88%] md:w-[88%] sm:w-full mt-10 mb-10 w-full h-auto lg:block md:block sm:hidden hidden '>
            {/* your info section */}
            <Toaster />
            <div className='w-full h-auto flex items-center lg:gap-x-20 md:gap-x-16 sm:gap-x-12 gap-x-8 justify-center mb-10'>
                <img src={userDetails?.avatar} alt="profile-image" className='rounded-full lg:w-44 md:w-44 sm:w-36 w-32 lg:h-44 md:h-44 sm:h-36 h-36 object-cover' />
                <div className='flex items-start flex-col'>
                    <div className='flex items-center gap-x-5 mb-4'>
                        <Link to={"/profile"} className='text-lg capitalize text-gray-200 font-bold'>
                            {userDetails?.name}
                        </Link>

                        <div className='flex items-center gap-x-2'>
                            <button className='bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150'>Edit Profile</button>
                            <button className='bg-[#1d1d1d] rounded-lg px-4 py-1.5 text-base text-white font-normal hover:bg-[#2f2f2f] ease-out duration-150'>View Archive</button>
                        </div>
                        <Settings />
                    </div>
                    <div className='flex items-center gap-x-6 mb-4'>
                        <h6 className='text-base text-gray-100 font-normal '>{userDetails?.posts?.length} Posts</h6>
                        <button className='text-base text-gray-100 font-normal ' onClick={() => document.getElementById('my_modal_2').showModal()}>{userDetails?.followers?.length} Followers</button>
                        <dialog id="my_modal_2" className="modal ">
                            <div className="modal-box w-96">
                                <h1 className="font-bold text-lg mb-10">Followers</h1>
                                {Followers?.map((user) => (

                                    <div key={user?.foundUser?._id} className='cursor-pointer flex items-center gap-x-10 mb-6'>
                                        <img src={user?.foundUser?.avatar} alt="profile-image" className='border border-solid border-blue-600 rounded-full lg:w-12 md:w-12 sm:w-12 w-12 lg:h-12 md:h-12 sm:h-12 h-12 object-cover' />
                                        <div className='flex flex-col'>
                                            <p className='text-base font-bold text-gray-500  capitalize'>{user?.foundUser?.name}</p>
                                            <p className='text-base font-bold text-gray-500 capitalize'>{user?.foundUser?.username}</p>
                                        </div>
                                        <div className='absolute right-10'>
                                            <button className='text-[0.855rem] font-bold text-blue-500 hover:text-gray-500'>Follow</button>
                                        </div>
                                    </div>
                                ))}
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className='text-base text-gray-100 font-normal ' onClick={() => document.getElementById('my_modal_1').showModal()}>{userDetails?.following?.length} Following</button>
                        <dialog id="my_modal_1" className="modal ">
                            <div className="modal-box w-96">
                                <h1 className="font-bold text-lg mb-10">Following</h1>
                                {userFollowing?.map((user) => (

                                    <div key={user?.foundUser?._id} className='cursor-pointer flex items-center gap-x-10 mb-6'>
                                        <img src={user?.foundUser?.avatar} alt="profile-image" className='border border-solid border-blue-600 rounded-full lg:w-12 md:w-12 sm:w-12 w-12 lg:h-12 md:h-12 sm:h-12 h-12 object-cover' />
                                        <div className='flex flex-col'>
                                            <p className='text-base font-bold text-gray-500  capitalize'>{user?.foundUser?.name}</p>
                                            <p className='text-base font-bold text-gray-500 capitalize'>{user?.foundUser?.username}</p>
                                        </div>
                                        <div className='absolute right-10'>
                                            <button onClick={() => followUser(user?.foundUser?._id)} className='text-[0.855rem] font-bold text-blue-500 hover:text-gray-500'>Unfollow</button>
                                        </div>
                                    </div>
                                ))}
                                <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>

                    </div>
                    {/* fullname */}
                    <p className='text-base text-gray-100 font-bold capitalize mb-4'> {userDetails?.name} <span className='bg-gray-600 rounded p-1 ml-4'>{userDetails?.username}</span></p>
                    {/* bio */}
                    <p className='text-base text-gray-100 font-normal mb-4'>
                        Add bio.. <br />

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
                    {userPosts?.post?.map((data) => (
                        <Link to={'/'} key={data._id} className='flex items-center justify-between flex-col flex-shrink-0'>
                            <div className='w-16 h-16 object-cover rounded-full p-[2px] bg-gradient-to-r from-[#1d1d1d] to-[#c7bbbb]'>
                                <img src={data.imageurl} alt={data.title} className='rounded-full h-full w-full object-cover bg-black p-[2.5px]' />

                            </div>
                            <p className='mt-1 text-sm text-white '>{data.title}</p>
                        </Link>
                    ))}
                </div>
            </div>



            <div className='w-full h-auto flex items-center gap-x-9 mb-10'>
                <div className='w-full h-full flex items-center justify-center gap-x-6 mb-4 border-t border-[#313131]'>
                    <Tabs label={"POSTS"}
                        icon={posticon}
                        isActive={activeTab === 'posts'}
                        onClick={() => handletabclick('posts')}
                    />
                    <Tabs label={"SAVED"}
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
