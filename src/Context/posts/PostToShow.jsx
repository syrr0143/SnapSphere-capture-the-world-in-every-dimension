import React, { useState, useEffect, useContext, createContext, useMemo, } from 'react';
import { useNavigate } from 'react-router-dom'
export const PostContext = createContext();
import toast, { Toaster } from 'react-hot-toast';
import { UserContext } from '../UserContext';

export const PostProvider = ({ children }) => {
    const navigate = useNavigate();
    const [PostToShow, setPostToShow] = useState([]);
    const [AllPosts, setAllPosts] = useState([]);
    const { userDetails } = useContext(UserContext);
    const memoizedUserDetails = useMemo(() => userDetails, [userDetails]);
    console.log(userDetails)
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            toast.error("No token found, please login again ");
            navigate('/login'); // Navigate to the login page
            return;
        }
        const postDetails = async () => {
            try {

                const response = await fetch('http://localhost:4000/api/v1/post/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setAllPosts(data?.posts);
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


    const handleLike = async (postid) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('No token found!');
                return;
            }

            const response = await fetch(`http://localhost:4000/api/v1/post/like/${postid}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const updatedPosts = AllPosts?.map(post => {
                    if (post._id === postid) {
                        const isLiked = post?.likes.includes(memoizedUserDetails?._id);
                        const updatedLikes = isLiked
                            ? post?.likes.filter(like => like !== memoizedUserDetails?._id)
                            : [...post?.likes, memoizedUserDetails?._id];

                        return { ...post, likes: updatedLikes };
                    }
                    return post;
                });
                setAllPosts(updatedPosts);
                setPostToShow(updatedPosts); // Update PostToShow with the updated likes
                toast.success('Post liked/unliked successfully');
            } else {
                const errorData = await response.json();
                toast.error(errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred while liking the post');
        }
    };

    return (
        <PostContext.Provider value={{ PostToShow, AllPosts, handleLike }}>
            {children}
        </PostContext.Provider>
    )
};

