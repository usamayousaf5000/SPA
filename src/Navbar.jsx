import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
            <div className="container">
                <div className="title">
                    <h3>My-App</h3>
                </div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/login'>login</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/createpost'>Create Post</Link></li>

                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar
