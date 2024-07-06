import React, { useState, useContext, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import TextEllipse from '../Stories/TextEllipse/TextEllipse';
import Ellipse from '../../../Icons/Ellipse/Ellipse.jsx';
import Like from '../../../Icons/Like/Like.jsx';
import Comment from '../../../Icons/Comment/Comment.jsx';
import Share from '../../../Icons/Share/Share.jsx';
import Save from '../../../Icons/Save/Save.jsx';
import Emoji from '../../../Icons/Emoji/Emoji.jsx';
import { PostContext } from '../../../Context/posts/PostToShow.jsx';
import { UserContext } from '../../../Context/UserContext.jsx';
import toast from 'react-hot-toast';
import postHook from '../../../CustomHook/PostHook.js'
const timeSince = (date) => {
    const now = new Date();
    const seconds = Math.floor((now - new Date(date)) / 1000);

    let interval = Math.floor(seconds / 604800); // Seconds in one week

    if (interval >= 1) {
        return interval + " w";
    }
    interval = Math.floor(seconds / 86400); // Seconds in one day
    if (interval >= 1) {
        return interval + " d";
    }
    interval = Math.floor(seconds / 60); // Seconds in one minute
    if (interval >= 1) {
        return interval + " m";
    }
    return Math.floor(seconds) + " s";
};



const fetchUserDetails = async (userId) => {
    try {
        console.log('finding post user details')
        const response = await fetch(`http://localhost:4000/api/v1/user/search/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`, // Ensure you have the token
            },
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data, 'post user details')
            return data.foundUser; // Assuming the API returns user details in the 'user' field
        } else {
            const errorData = await response.json();
            toast.error(errorData?.message);
            return null;
        }
    } catch (error) {
        console.error('Error:', error);
        toast.error('An error occurred while fetching user details');
        return null;
    }
};

const FeedCard = () => {
    const { AllPosts, handleLike } = useContext(PostContext);
    const { userDetails, fetchsavedpost } = useContext(UserContext);
    console.log('fetched post is ', fetchsavedpost)
    const [comments, setComments] = useState({});
    const [fetchedUserDetails, setFetchedUserDetails] = useState({});
    const memoizedUserDetails = useMemo(() => userDetails, [userDetails]);

    const { postdeleted, posttodelete, allcomment, getAllComment } = postHook();
    const handleCommentChange = (postId, value) => {
        setComments(prev => ({ ...prev, [postId]: value }));
    };

    const handleEllipsis = (postid) => {
        console.log('clicked ellipesis')
        posttodelete(postid);
        console.log(postdeleted)
    }
    const handlesavepost = (postid) => {
        savepost(postid);
    }
    const getallcomentsofpost = (postid) => {
        console.log('clicked comment')
        getAllComment(postid);
        console.log('this is all the comment of the post', allcomment)
    }
    useEffect(() => {
        const fetchAndStoreUserDetails = async () => {
            const userIds = AllPosts.map(post => post.user);
            const uniqueUserIds = [...new Set(userIds)];

            const userDetailsPromises = uniqueUserIds.map(id => fetchUserDetails(id));
            const userDetailsArray = await Promise.all(userDetailsPromises);

            const userDetailsMap = uniqueUserIds.reduce((acc, id, index) => {
                acc[id] = userDetailsArray[index];
                return acc;
            }, {});

            setFetchedUserDetails(userDetailsMap);
        };

        fetchAndStoreUserDetails();
    }, [AllPosts]);

    const userDetailsMap = useMemo(() => fetchedUserDetails, [fetchedUserDetails]);

    const handleComment = async (postid) => {
        const comment = comments[postid];
        if (!comment) return;

        try {
            if (/^\s*$/.test(comment)) {
                toast.error('Comment cannot be empty');
                return;
            }

            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('No token found!');
                return;
            }

            const response = await fetch(`http://localhost:4000/api/v1/post/comment/${postid}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ comment }),
            });

            if (response.ok) {
                const data = await response.json();
                toast.success(data?.message);
                setComments(prev => ({ ...prev, [postid]: '' })); // Clear the textarea after successful submission
            } else {
                const errorData = await response.json();
                toast.error(errorData?.message);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred while adding the comment');
        }
    };


    return (
        <>

            {AllPosts?.map((posts) => (
                <div key={posts?._id} className='w-full h-auto mb-6'>
                    <div className='w-full h-auto flex items-center justify-between mb-2'>
                        <div className='flex items-center gap-x-2'>
                            <Link to={'#'} className='flex items-center justify-center flex-col flex-shrink-0'>
                                <div className='w-10 h-10 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#ffd89b] to-[#19547b]'>
                                    <img src={userDetailsMap[posts?.user]?.avatar} alt="" className='rounded-full w-full h-full object-cover bg-black p-[2.5px]' />
                                </div>
                            </Link>
                            <div className='flex  items-center gap-x-2'>
                                <p className='text-white text-sm font-medium'>{userDetailsMap[posts?.user]?.username}</p>
                                <div className='w-1 h-1 bg-gray-500 rounded-full'></div>
                                <p className='text-white text-sm font-medium'>{posts?.createdAt ? timeSince(posts.createdAt) : 'N/A'}</p>
                            </div>
                        </div>
                        <Ellipse />
                    </div>
                    <div className='w-full lg:max-h-[75vh] md:max-h-[70vh] sm:max-h-[65vh] max-h-[50vh] lg:h-[70vh] md:lg-h-[60vh] sm:h-[50vh] h-[50vh] lg:min-h-[65vh]  md:min-h-[55vh] sm:min-h-[50vh] min-h-[45vh] border border-gray-300 rounded overflow-hidden mb-3 display contents'>
                        {/\.(mp4|webm|ogg)$/.test(posts?.imageurl) ? (
                            <video src={posts?.imageurl} controls className='w-auto h-full rounded object-center'>
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <img src={posts?.imageurl} alt={posts?.title} className='w-auto h-full rounded object-center' />
                        )}


                    </div>
                    <div className='w-full h-auto flex items-center justify-between'>
                        <div className='flex items-center gap-x-3 '>
                            <div onClick={() => handleLike(posts?._id)}>
                                <Like fill={posts?.likes.includes(memoizedUserDetails?._id) ? "rgba(255, 48, 64, 1)" : ""} color={posts?.likes.includes(memoizedUserDetails?._id) ? "rgba(255, 48, 64, 1)" : ""} />
                            </div>
                            <div><Comment /></div>
                            <div><Share /></div>
                            {/* <div onClick={() => handleEllipsis(posts?._id)}>delete</div> */}
                        </div>

                        <div onClick={() => handlesavepost(posts?._id)}><Save fill={userDetails?.savedPost?.includes(posts?._id) ? "rgba(255, 255, 255, 1)" : ""} color={userDetails?.savedPost?.includes(posts?._id) ? "rgba(255, 255, 255, 1)" : ""} />
                        </div>
                    </div>
                    <Link to={'/'} className='w-full h-auto flex items-center gap-x-2 text-base text-gray-200 font-medium my-2'>
                        <div className='flex items-center'>
                            <img src={posts?.mutualFrndImg1} alt={posts?.comments.length} className='w-5 h-5 rounded-full object-fill p-[1.5px] bg-black ' />
                            <img src={posts?.mutualFrndImg2} alt={posts?.likes.length} className='w-5 h-5 rounded-full object-fill p-[1.5px] bg-black -ml-3' />
                        </div>
                        {posts.likes.length} Likes
                    </Link>

                    <div className='w-full h-auto flex items-center gap-x-1 '>
                        <div className='w-full h-auto text-sm text-gray-200 font-thin'>
                            <Link to={'/'} className='text-white font-medium text-sm me-1'>
                                {userDetailsMap[posts?.user]?.username}
                            </Link>
                            <p className='text-base capitalize'>{posts?.description}</p>
                            <Link to={'/'} className='text-gray-400 text-sm ms-1'>
                                more
                            </Link>
                        </div>
                    </div>


                    <button className='text-base text-gray-100 font-normal ' onClick={() => document.getElementById('my_modal_5').showModal()}> <Link to={'/'} onClick={() => getallcomentsofpost(posts?._id)} className='text-gray-400 font-normal my-2'>
                        View all {posts?.comments.length} Comments
                    </Link></button>
                    <dialog id="my_modal_5" className="modal ">
                        <div className="modal-box w-96">
                            <h1 className="font-bold text-lg mb-10">All comments</h1>
                            {allcomment?.allComments?.map((comment) => (

                                <div key={comment?._id} className='cursor-pointer flex items-center gap-x-10 mb-6'>

                                    <div className='flex flex-col'>
                                        <p className='text-base font-bold  capitalize'>{comment?.user}</p>
                                        <p className='text-base  text-gray-500  capitalize'>{comment?.comment}</p>
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

                    <div className='w-full h-auto flex items-center justify-between border-b border-b-gray-500'>
                        <input
                            type="text"
                            placeholder="Add a comment"
                            name='comment'
                            value={comments[posts?._id] || ''}
                            onChange={(e) => handleCommentChange(posts?._id, e.target.value)}
                            className="w-[90%] h-auto bg-transparent border-none outline-none focus:outline-none text-sm text-gray-400 py-3"
                        />
                        <Emoji />
                        <button onClick={() => handleComment(posts?._id)} className='btn bg-black border border-solid border-gray-500 text-white '>Post</button>
                    </div>
                </div>
            ))}
        </>
    );
}

export default FeedCard;
