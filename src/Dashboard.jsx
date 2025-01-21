import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Dashboard() {
    const Navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(response.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };
    const deletePost = async (postId) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            setPosts((data) => { data.filter((post) => { post.id === postId }) })
            alert(`Post ${postId} deleted sucessfully`)
            Navigate('/dashboard')
        } catch {
            console.log(`Error ${postId} delelting post`)
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="dashboard">
                <h2>All Posts</h2>
                <div className="posts-container">
                    {posts.map((post) => (
                        <div key={post.id} className="post-card">
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <div className="button">
                                <button >Edit</button>
                                <button onClick={() => { deletePost(post.id) }}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Dashboard;
