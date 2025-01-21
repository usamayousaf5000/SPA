import React, { useEffect, useState ,} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreatePost() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const statusMessage = '';
    const navigate = useNavigate();
    const handleCreatePost = async (e) => {
        // console.log(title,content)
        e.preventDefault();
        if (!title && !content) {
            alert("Both Title and Content required")
            return
        }
        await axios.post('https://jsonplaceholder.typicode.com/posts',{title,content})
        .then((response)=>{
            console.log('--------',response.data)
            alert('Post created Sucessfully')
            navigate('/dashboard')
        })
        .catch((err)=>{
            console.log('Error to load data',err)
        })
    }
    useEffect(()=>{
    handleCreatePost ;
    },[])
    return (
        <>
            <div className="post-container">
                <form onSubmit={handleCreatePost}>
                    <h2>Create Post</h2>
                    <label htmlFor='title'>Title</label>
                    <textarea type='text' id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} required />
                    <label htmlFor='title'>Content</label>
                    <textarea type='text' id='content' name='content' rows='7' value={content} onChange={(e) => setContent(e.target.value)} required />
                    <div className="btn">
                        <button type='submit'>Create Post</button>
                    </div>
                </form>
                {statusMessage}
            </div>
        </>
    )
}

export default CreatePost
