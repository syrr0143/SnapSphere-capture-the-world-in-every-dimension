import { useState, useEffect } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const postHook = () => {
    const [postdeleted, setpostdeleted] = useState({});
    const navigate = useNavigate();
    const [allcomment, setallcomment] = useState({});
    const token = localStorage.getItem('token');
    useEffect(() => {
        // Check if the token exists in localStorage
        if (!token) {
            navigate('/signup'); // Redirect to /signup if token is not present
        }
    }, [token, navigate]);

    const posttodelete = async (postid) => {

        const response = await fetch(`http://localhost:4000/api/v1/post/actions/${postid}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        if (response.ok) {
            const data = await response.json();
            setpostdeleted(data)

        }
    }

    const getAllComment = async (postid) => {
        const response = await fetch(`http://localhost:4000/api/v1/post/comment/${postid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });
        if (response.ok) {
            const data = await response.json();
            setallcomment(data);
            console.log('data is ', data)
        }
    }

    const savepost = async (postid) => {
        const response = await fetch(`http://localhost:4000/api/v1/post/savePost/${postid}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }

        })

        if (response.ok) {
            const data = await response.json();
            toast.success('Post saved succesfully!')
        } else {
            toast.error('Post has been saved already')
        }
    }
    return { posttodelete, postdeleted, allcomment, getAllComment, savepost };
}

export default postHook;