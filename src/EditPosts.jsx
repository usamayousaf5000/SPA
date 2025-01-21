import axios from 'axios';
import React, { useState} from 'react';

const EditPosts = ({ post, onUpdate }) => {
    const [editTitle, setEditTitle] = useState('');
    const [editContent, setEditContent] = useState('');

    const handleEdit = async (e) => {
        e.preventDefault();

        if (!editTitle || !editContent) {
            console.log('Both title and content are required');
            return;
        }

        try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`,
                {
                    userId: post.userId,
                    id: post.id,
                    title: editTitle,
                    body: editContent
                }
            );
            onUpdate(response.data); 
        } catch (error) {
            console.log('Failed to edit data', error);
        }
    };


    return (
        <div className="post-container">
            <form onSubmit={handleEdit}>
                <h2>Edit Post</h2>
                <label htmlFor="title">Title</label>
                <textarea
                    type="text"
                    id="title"
                    name="title"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    required
                />
                <label htmlFor="content">Content</label>
                <textarea
                    type="text"
                    id="content"
                    name="content"
                    value={editContent}
                    rows="7"
                    onChange={(e) => setEditContent(e.target.value)}
                    required
                />
                <div className="btn">
                    <button type="submit">Edit Post</button>
                </div>
            </form>
        </div>
    );
};

export default EditPosts;
