import React, { useState } from 'react';
import { Input, Button, Card, Typography } from '@material-tailwind/react';
import toast, { Toaster } from 'react-hot-toast';

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

            const response = await fetch(`http://localhost:4000/api/v1/post/search?q=${searchTerm}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },

            });
            if (response.ok) {
                const data = await response.json();
                setResults(data?.posts);
                if (data?.posts.length > 0) {
                    toast.success('fetched successfully');
                }
                else {
                    toast.error('No post matching query');

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
            <Toaster />
            <div className="flex justify-center mt-10 mb-6">
                <Input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full max-w-md rounded text-gray-500 font-bold"
                />
                <Button className="ml-0 pr-6 pl-6 uppercase bg-gray-500 text-white" onClick={handleSearch}>
                    Search
                </Button>

            </div>
            <div className="grid grid-cols-3 gap-4">
                {loading ? (
                    <>
                        <div>
                            <div className="skeleton h-32 w-full"></div>
                            <div className="skeleton h-4 w-28"></div>
                            <div className="skeleton h-4 w-full"></div>
                            <div className="skeleton h-4 w-full"></div>
                        </div>
                    </>
                ) : (
                    results.map((result) => (
                        <Card key={result._id} className="m-2 rounded-lg shadow-lg max-w-full">
                            {/* Assuming the image is available */}
                            <img src={result?.imageurl} alt={result?.title} className="w-full h-80 object-cover object-center rounded-t-lg" />
                            <div className="p-4">
                                <div className='flex items-center gap-x-2'>
                                    <p className=' text-sm font-medium capitalize'>{result?.title}</p>
                                    <div className='w-1 h-1 bg-gray-500 rounded-full'></div>
                                    <p className=' text-sm font-medium'>{result?.createdAt ? timeSince(result.createdAt) : 'N/A'}</p>
                                </div>
                                <Typography variant="paragraph" color="gray" className="mt-2">
                                    {result?.description}
                                </Typography>

                            </div>
                        </Card>
                    ))
                )}


            </div>
        </div>
    );
};

export default SearchPage;
