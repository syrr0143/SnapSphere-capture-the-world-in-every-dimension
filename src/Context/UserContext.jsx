import React, { createContext, useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';


// Create a context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState({});
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('No token found');
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

                    const userPosts = await Promise.all(data.user.posts.map(async (postId) => {
                        const postResponse = await fetch(`http://localhost:4000/api/v1/post/actions/${postId}`, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${token}`,
                            },
                        });

                        if (postResponse.ok) {
                            return postResponse.json();
                        }
                        return null;
                    }));
                    setUserPosts(userPosts.filter(post => post !== null));
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

    return (
        <UserContext.Provider value={{ userDetails, userPosts }}>
            {children}
        </UserContext.Provider>
    );
};
