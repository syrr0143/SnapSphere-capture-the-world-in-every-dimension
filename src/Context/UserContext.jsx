import React, { createContext, useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

// Create a context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({});
    const [userPosts, setUserPosts] = useState([]);
    const [userFollowing, setUserFollowing] = useState([]);
    const [Followers, setFollowers] = useState([]);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/login'); // Navigate to the login page
                    return;
                }
                const response = await fetch('http://localhost:4000/api/v1/user/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();

                    setUserDetails(data.user);

                } else {
                    const errorData = await response.json();
                    toast.error(errorData.message);
                    console.error('Error:', errorData.message);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchUserDetails();
    }, []);

    useEffect(() => {
        const fetchUserPosts = async () => {
            if (!userDetails || !userDetails?.posts) return;

            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found');
                return;
            }

            const fetchedPosts = [];
            for (const postId of userDetails?.posts) {
                try {
                    const response = await fetch(`http://localhost:4000/api/v1/post/actions/${postId}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        }
                    });
                    if (response.ok) {
                        const data = await response.json();
                        fetchedPosts.push(data);
                    }
                } catch (error) {
                    console.error('Error fetching post:', error);
                }
            }

            setUserPosts(fetchedPosts);
        };

        fetchUserPosts();
    }, [userDetails]);


    useEffect(() => {
        const fetchUserFollowing = async () => {
            if (!userDetails || !userDetails.following) return;

            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found');
                return;
            }

            const fetchedUserFollowing = [];
            for (const userFollowingId of userDetails.following) {
                try {
                    const response = await fetch(`http://localhost:4000/api/v1/user/search/${userFollowingId}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        }
                    });
                    if (response.ok) {
                        const data = await response.json();
                        fetchedUserFollowing.push(data);
                    }
                } catch (error) {
                    console.error('Error fetching following user:', error);
                }
            }

            setUserFollowing(fetchedUserFollowing);
        };

        fetchUserFollowing();
    }, [userDetails]);

    useEffect(() => {
        const fetchFollowers = async () => {
            if (!userDetails || !userDetails.followers) return;

            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found');
                return;
            }

            const fetchedfollowers = [];
            for (const followersid of userDetails.followers) {
                try {
                    const response = await fetch(`http://localhost:4000/api/v1/user/search/${followersid}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        }
                    });
                    if (response.ok) {
                        const data = await response.json();
                        fetchedfollowers.push(data);
                    }
                } catch (error) {
                    console.error('Error fetching following user:', error);
                }
            }

            setFollowers(fetchedfollowers);
        };

        fetchFollowers();
    }, [userDetails]);
    return (
        <UserContext.Provider value={{ userDetails, userPosts, userFollowing, Followers }}>
            {children}
        </UserContext.Provider>
    );
};
