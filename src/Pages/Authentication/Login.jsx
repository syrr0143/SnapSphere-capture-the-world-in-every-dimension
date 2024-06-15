import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import bg1 from '../../assets/images/bg1.jpg'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/api/v1/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                toast.success('Login successful!');
                const data = await response.json();
                localStorage.setItem('token', data.token);

                // Navigate to home page after successful login
                navigate('/');
            } else {
                const errorData = await response.json();
                setErrorMessage(errorData.message);
                toast.error(errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('An error occurred during login.');

            toast.error('An error occurred during login.');
        }
    };

    return (
        <div
            className="bg-no-repeat bg-cover bg-center relative"
            style={{ backgroundImage: `url(${bg1})` }}
        ><Toaster />
            <div
                className="absolute bg-black bg-opacity-20 inset-0 z-0"
                style={{ backdropFilter: 'blur(6px)' }}
            ></div>

            <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                <div className="flex justify-center self-center z-10">
                    <div className="p-12 bg-white mx-auto rounded-2xl w-100">
                        <div className="mb-4">
                            <h3 className="font-semibold text-2xl text-gray-800">Sign In</h3>
                            <p className="text-gray-500">Please sign in to your account.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 tracking-wide">Email/UserId</label>
                                <input
                                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                                    type="text"
                                    placeholder="mail@gmail.com/userid"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">Password</label>
                                <input
                                    className="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-800"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember_me"
                                        name="remember_me"
                                        type="checkbox"
                                        className="h-4 w-4 bg-gray-500 focus:ring-gray-800 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-800">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <a href="#" className="text-gray-500 hover:text-gray-800">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center bg-gray-500 hover:bg-gray-800 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                                >
                                    Sign in
                                </button>
                            </div>
                            {errorMessage && <div className="text-red-500 text-center">{errorMessage}</div>}
                            <div className="text-sm text-center">
                                <a href="/signup" className="text-gray-500 hover:text-gray-800">
                                    Don't have an account?
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
                    <div className="self-start hidden lg:flex flex-col text-white">
                        {/* <img src='' className="mb-3" alt="" /> */}
                        <h1 className="mb-3 font-bold text-5xl">Hi ? Welcome Back</h1>
                        <p className="pr-3">
                            Log in to see photos and videos from friends and discover other accounts you'll love.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
