import React, { useState, useEffect, useContext, createContext } from 'react';
export const PostContext = createContext();
import toast, { Toaster } from 'react-hot-toast';

export const PostProvider = ({ children }) => {
    const [PostToShow, setPostToShow] = useState([]);
    const [AllPosts, setAllPosts] = useState([]);

    useEffect(() => {
        const postDetails = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    toast.error("No token found, please login again ");
                    throw new Error('No token found');
                }
                const response = await fetch('http://localhost:4000/api/v1/post/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setAllPosts(data.posts);
                } else {
                    const errorData = await response.json();
                    toast.error(errorData.message);
                    console.error('Error:', errorData.message);
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };
        postDetails();
    }, []);
    return (
        <PostContext.Provider value={{ PostToShow, AllPosts }}>
            {children}
        </PostContext.Provider>
    )
}

