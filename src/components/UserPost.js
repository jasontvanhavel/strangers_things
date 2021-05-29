import React from 'react';
import './userpost.css';

const UserPost = (props) => {

    return <><div className="user-post">
            <div className="post-labels">
                <div className="post-title">{props.title}</div>
                <div className="post-price">{props.price}</div>
                <div className="post-seller">{props.seller}</div>
                <div className="post-location">{props.location}</div>
                <div className="post-deliverable">{props.deliverable ? "true" : "false"}</div>
            </div>
            <div className="post-description">{props.description}</div>
        </div>
        <div className="post-buttons">
            <button className="edit-post-button">Edit Post</button>
            <button className="delete-post-button">Delete Post</button>
        </div>
    </>

}

export default UserPost;