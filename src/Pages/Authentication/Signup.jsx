import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import bg1 from '../../assets/images/bg1.jpg'
import toast from 'react-hot-toast';

const Signup = () => {
    const [form, setForm] = useState({
        fullname: "",
        email: "",
        password: "",
        confirm_password: "",
        username: "",
        avatar: null
    });
    const handlechange = (e) => {
        if (e.target.type === 'file') {
            setForm({ ...form, [e.target.name]: e.target.files[0] });
        } else {
            setForm({ ...form, [e.target.name]: e.target.value });
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('name', form.fullname);
            formData.append('email', form.email);
            formData.append('password', form.password);
            formData.append('confirmpassword', form.confirm_password);
            formData.append('username', form.username);
            formData.append('avatar', form.avatar);

            const response = await fetch('https://snapsphere-api.onrender.com/api/v1/user', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();
            if (response.ok) {
                toast.success('Signup successful!, please login now');
                setForm({
                    fullname: "",
                    email: "",
                    password: "",
                    confirm_password: "",
                    username: "",
                    avatar: null
                })
            }
            else {
                toast.error(data.message);
            }
        } catch (error) {

            toast.error(data.error);

        }
    };
    return (
        <div
            className="bg-no-repeat bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${bg1})`
            }}
        >

            <div
                className="absolute bg-black bg-opacity-20 inset-0 z-0"
                style={{ backdropFilter: 'blur(6px)' }}
            ></div>

            <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">

                <div className="flex justify-center self-center z-10">
                    <div className="p-12 bg-white mx-auto rounded-2xl w-100">
                        <div className="mb-4">
                            <h3 className="font-semibold text-2xl text-gray-800">Create Account</h3>
                            <p className="text-gray-500">Please sign up to create your account.</p>
                        </div>
                        <form className="space-y-2" onSubmit={handleSubmit}>
                            <div className="space-y-0">
                                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">Full Name</label>
                                <input
                                    className="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-800"
                                    type="text"
                                    name='fullname'
                                    value={form.fullname}
                                    onChange={handlechange}
                                    placeholder="Enter Your Full Name"
                                />
                            </div>
                            <div className="space-y-0">
                                <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                                <input
                                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
                                    type="email"
                                    name='email'
                                    value={form.email}
                                    onChange={handlechange}
                                    placeholder="mail@gmail.com"
                                    required
                                />
                            </div>

                            <div className="space-y-0">
                                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">Username</label>
                                <input
                                    className="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-800"
                                    type="text"
                                    name='username'
                                    value={form.username}
                                    onChange={handlechange}
                                    autoComplete="username"

                                    placeholder="Enter Your Username"
                                />
                            </div>
                            <div className="space-y-0">
                                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">Password</label>
                                <input
                                    className="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-800"
                                    type="password"
                                    name='password'
                                    value={form.password}
                                    onChange={handlechange}
                                    autoComplete="new-password"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <div className="space-y-0">
                                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">Confirm Password</label>
                                <input
                                    className="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-800"
                                    type="password"
                                    name='confirm_password'
                                    value={form.confirm_password}
                                    onChange={handlechange}
                                    autoComplete="new-password"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <div className="space-y-0">
                                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">Upload Profile Image</label>
                                <input
                                    className="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-800"
                                    type="file"
                                    accept='image/*'
                                    name='avatar'
                                    onChange={handlechange}
                                    placeholder="Please chose a file"
                                />
                            </div>

                            <div className="flex items-center justify-between">

                                <div className="text-sm">
                                    <a href="#" className="text-gray-500 hover:text-gray-800">
                                        Forgot your password?
                                    </a>
                                </div>
                                <div className="text-sm">
                                    <a href="/login" className="text-gray-500 hover:text-gray-800">
                                        Have an account?
                                    </a>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center bg-gray-500 hover:bg-gray-800 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                                >
                                    Sign up
                                </button>
                            </div>

                        </form>

                    </div>
                </div>
                <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
                    <div className="self-start hidden lg:flex flex-col text-white">
                        <img src="" className="mb-3" alt="" />
                        <h1 className="mb-3 font-bold text-5xl">Discover something new</h1>
                        <p className="pr-3">
                            Sign up to see photos and videos from your friends.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Signup;
