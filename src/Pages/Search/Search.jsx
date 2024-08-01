import React, { useState } from 'react';
import { Input, Button, Card, Typography } from '@material-tailwind/react';
import toast from 'react-hot-toast';

const timeSince = (date) => {
    const now = new Date();
    const seconds = Math.floor((now - new Date(date)) / 1000);

    let interval = Math.floor(seconds / 604800); // Seconds in one week

    if (interval >= 1) {
        return interval === 1 ? interval + " w" : interval + " w";
    }
    interval = Math.floor(seconds / 86400); // Seconds in one day
    if (interval >= 1) {
        return interval === 1 ? interval + " d" : interval + " d";
    }
    interval = Math.floor(seconds / 60); // Seconds in one minute
    if (interval >= 1) {
        return interval === 1 ? interval + " m" : interval + " m";
    }
    return Math.floor(seconds) === 1 ? Math.floor(seconds) + " s" : Math.floor(seconds) + " s";
};

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setsearchType] = useState('Post');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            if (!token) {
                toast.error('No token found!');
                setLoading(false);
                return;

            }
            const endpoint = searchType === 'User' ? 'user/search' : 'post/search';
            const response = await fetch(`https://snapsphere-api.onrender.com/api/v1/${endpoint}?q=${searchTerm}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },

            });
            if (response.ok) {
                const data = await response.json();
                setResults(data?.posts || data?.users || []);
                if (data?.posts?.length > 0 || data?.users?.length > 0) {
                    toast.success('fetched successfully');
                }
                else {
                    toast.error('No matching result found');

                }
            } else {
                const errorData = await response.json();
                toast.error(errorData?.message);
                console.error("error", errorData?.message);

            }
        } catch (error) {
            // toast.error('An error occurred while fetching user details');
            console.error('Error:', error);
        } finally {
            setLoading(false);

        }
    }


    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-center mt-10 mb-6">
                <Input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full max-w-md rounded text-gray-500 font-bold"
                    placeholder='Enter text here to search'
                />
                <select value={searchType} onChange={(e) => setsearchType(e.target.value)} className="rounded border border-solid border-gray-500 bg-black text-white ml-0">
                    <option disabled >What do you want to search?</option>
                    <option value="User">User</option>
                    <option value="Post">Post</option>
                </select>
                <Button className="ml-48 pr-6 pl-6 uppercase bg-gray-500 text-white" onClick={handleSearch}>
                    Search
                </Button>


            </div>
            <div className="grid grid-cols-3 gap-4">
                {loading ? (
                    <>
                        <div>Loading...</div>
                    </>
                ) : (
                    results.map((result) => (
                        <Card key={result._id} className="m-2 bg-black border border-solid border-gray-500 rounded-lg shadow-lg max-w-full">
                            {searchType === 'Post' ? (
                                <>
                                    <img src={result?.imageurl} alt={result?.title} className="w-full h-80 object-cover object-center rounded-t-lg" />
                                    <div className="p-4">
                                        <div className='flex items-center gap-x-2'>
                                            <p className='text-sm text-white font-medium capitalize'>{result?.title}</p>
                                            <div className='w-1 h-1 bg-gray-500 rounded-full'></div>
                                            <p className='text-sm text-white font-medium'>{result?.createdAt ? timeSince(result.createdAt) : 'N/A'}</p>
                                        </div>
                                        <Typography variant="paragraph" color="white" className="mt-2">
                                            {result?.description}
                                        </Typography>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="p-4 cursor-pointer">
                                        <div className='flex items-center justify-evenly gap-x-2'>
                                            <div className="avatar">
                                                <div className="w-24 rounded-full">
                                                    <img src={result?.avatar} />
                                                </div>
                                            </div>
                                            <div className='flex-col'>
                                                <div>
                                                    <p className='text-sm text-white font-medium capitalize'>{result?.name}</p>

                                                </div>
                                                <div>
                                                    <p className='text-sm text-gray-500 font-medium capitalize'>{result?.username}</p>
                                                </div>
                                                <div>
                                                    <p className='text-sm text-white font-medium capitalize'>{result?.followers.length} Follower</p>

                                                </div>
                                                <div>
                                                    <p className='text-sm text-white font-medium capitalize'>{result?.following.length} Following</p>

                                                </div>
                                                <div>
                                                    <div className='flex items-center gap-2'>
                                                        <div className='w-1 h-1 bg-gray-500 rounded-full'></div>
                                                        <p className='text-sm text-white font-medium'>{result?.createdAt ? timeSince(result.createdAt) : 'N/A'}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
};

export default SearchPage;
