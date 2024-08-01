import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

const CreatePostPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !description || !image) {
            toast.error('Please fill in all fields and upload an image.');
            return;
        }

        try {
            setLoading(true);
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('image', image);

            const token = localStorage.getItem('token');
            const response = await fetch('https://snapsphere-api.onrender.com/api/v1/post', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formData,
            });

            if (response.ok) {
                toast.success('Post created successfully!');
                setTitle('');
                setDescription('');
                setImage(null);
            } else {
                const errorData = await response.json();
                toast.error(errorData?.message);
                console.error("Error:", errorData?.message);
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred while creating the post');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto p-4">

            <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Create Post</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="input input-bordered w-full"
                            placeholder="Enter title"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="textarea textarea-bordered w-full"
                            placeholder="Enter description"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">Image</label>
                        <input
                            type="file"
                            id="image"
                            onChange={handleImageChange}
                            className="file-input file-input-bordered w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <button
                            type="submit"
                            className={`btn btn-primary w-full ${loading && 'loading'}`}
                            disabled={loading}
                        >
                            {loading ? 'Creating...' : 'Create Post'}
                            {loading ? (<span className="loading loading-spinner loading-sm"></span>) : ""}

                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePostPage;
