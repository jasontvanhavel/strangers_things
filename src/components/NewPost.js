import React from 'react';
import './newpost.css';


const NewPost = () =>{

    return <div id="new-post">
        <h1>Create New Post</h1>
        <form id="new-post-form">
            <div id="post-title">
                <label htmlFor="new-post-title">New Post Title</label>
                <input type="text" name="new-post-title" id="new-post-title" placeholder="New Post Title"></input>
            </div>
            <div id="post-price">
                <label htmlFor="new-post-price">Price</label>
                <input type="text" name="new-post-price" id="new-post-price" placeholder="Price"></input>
            </div>
            <div id="post-location">
                <label htmlFor="new-post-location">Location</label>
                <input type="text" name="new-post-location" id="new-post-location" placeholder="Location"></input>
            </div>
            <div id="delivery-box">
                <label htmlFor="new-post-deliverable">Willing to Deliver?</label>
                <input type="checkbox" name="new-post-deliverable" id="new-post-deliverable"></input>
            </div>
            <div id="post-description">
                <label htmlFor="new-post-description">Description</label>
                <textarea name="new-post-description" id="new-post-description" placeholder="Description"></textarea>
            </div>
        </form>
    </div>
}

export default NewPost;