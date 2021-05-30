import React, {useState} from 'react';
import './userpost.css';

const UserPost = ({
    title, price, seller, location, deliverable, description, currentUser
}) => {

    let [editable, setEditable] = useState(false);

    return <><div className="user-post">
                <div className="post-labels">
                { editable ? <> 
                        <div id="post-title">
                            <label htmlFor="new-post-title">New Post Title</label>
                            <input type="text" name="new-post-title" id="post-title" placeholder="New Post Title"></input>
                        </div>
                        <div id="post-price">
                            <label htmlFor="new-post-price">Price</label>
                            <input type="text" name="new-post-price" id="post-price" placeholder="Price"></input>
                        </div>
                        <div id="post-location">
                            <label htmlFor="new-post-location">Location</label>
                            <input type="text" name="new-post-location" id="post-location" placeholder="Location"></input>
                        </div>
                        <div id="delivery-box">
                            <label htmlFor="new-post-deliverable">Willing to Deliver?</label>
                            <input type="checkbox" name="new-post-deliverable" id="post-deliverable" value="deliverable"></input>
                        </div>
                        <div id="post-description">
                            <label htmlFor="new-post-description">Description</label>
                            <textarea name="new-post-description" id="post-description" placeholder="Description"></textarea>
                        </div>
                </> : <>
                
                    <div className="post-title">{title}</div>
                    <div className="post-price">{price}</div>
                    <div className="post-seller">{seller}</div>
                    <div className="post-location">{location}</div>
                    <div className="post-deliverable">{deliverable ? "Willing to Deliver" : "Not Willing to Deliver"}</div>
                    <div className="post-description">{description}</div>
                </> }
                </div>
        </div>
        <div className="post-buttons">
            {currentUser ?
                <>
                { (currentUser === seller) ? 
                    <>
                        <button className="edit-post-button" 
                            onClick={() => {setEditable(!editable)}}>
                            {editable ? 'Save Changes' : 'Edit Post'}</button>
                        <button className="delete-post-button">Delete Post</button> 
                    </> :
                    <button className="message-button">Message User</button> 
                }
                </> : ''
            }
        </div>
    </>

}

export default UserPost;