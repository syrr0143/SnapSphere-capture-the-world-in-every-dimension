import React, { useEffect, useState } from 'react'
import ProfileNav from './profilenav/ProfileNav';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const RecommendUser = () => {
    const [recommendUserData, setrecommendUserData] = useState([]);

    useEffect(() => {
        const reccomendation = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    toast.error('No token found!');
                    setLoading(false);
                    return;
                }
                const response = await fetch('http://localhost:4000/api/v1/user/allUsers', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,

                    }
                });
                if (response.ok) {
                    const data = await response.json();
                    const filteredUsers = data?.users.filter(user => !userDetails?.following.includes(user?._id));
                    setrecommendUserData(filteredUsers);
                } else {
                    const errorData = await response.json();
                    toast.error(errorData?.message);
                    console.error("error", errorData?.message);
                }
            } catch (error) {
                // toast.error('An error occurred while fetching user details');
                console.error('Error:', error);
            }
        }
        reccomendation();
    }, []);

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
        <div className='w-full h-auto py-3'>
            <Toaster />
            <ProfileNav />
            <div className='w-full h-auto my-8'>
                <div className='w-full h-auto flex items-center justify-between'>
                    <h6 className='text-sm text-gray-400 m-4 font-medium'>
                        Suggestions for you
                    </h6>
                    <Link to={'/'} className='text-xs font-semibold text-gray-300 hover:text-gray-600'>See All
                    </Link>
                </div>
                {recommendUserData.length > 0 ? (
                    recommendUserData.map((user) => (
                        <div key={user._id} className='w-full h-auto flex items-center justify-between mb-4'>
                            <Link to={`/profile/${user._id}`} className='w-full h-auto flex items-center gap-x-2 '>
                                <img src={user.avatar} alt={user.username} className='w-12 h-12 object-cover rounded-full' />
                                <div className='flex items-start gap-y-0 flex-col '>
                                    <p className='text-[0.9rem] text-white font-medium mb-0'>{user.name}</p>
                                    <h6 className='text-xs text-gray-500 font-normal'>Suggested For you</h6>
                                </div>
                            </Link>
                            <button onClick={() => followUser(user._id)} className='text-[0.855rem] text-blue-500 hover:text-gray-200'>Follow</button>
                        </div>
                    ))
                ) : (
                    <h1 className='text-white'>No users available</h1>
                )}

            </div>

        </div>
    )
}

export default RecommendUser
