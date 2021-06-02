import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './userpost.css';
import axios from 'axios';


const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-uic-rm-web-ft';

const UserPost = ({
    title, price, seller, location, deliverable, description, currentUser, id
}) => {

    let [editable, setEditable] = useState(false);

    async function deletePost(id) {
        let response = await axios.delete(BASE_URL + '/posts/' + id,
        {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('currentUserToken')
            }
        });
        // console.log(response.data);
    }

    function editPost() {
        newPost = {
            post: {
                title: newTitle,
                description: newDescription,
                location: newLocation,
                price: newPrice,
                willDeliver: newDeliverable
            }
        }
        axios.patch(BASE_URL + "/posts/" + id, 
            newPost,
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('currentUserToken')
                }
            });
        setEditable(false);
    }

    let newTitle = '';
    let newPrice = '';
    let newLocation = '';
    let newDescription = '';
    let newDeliverable = false;

    let newPost = {};

    return <><div className="user-post">
                <div className="post-labels">
                { editable ? <> 
                        <div id="post-title">
                            <label htmlFor="new-post-title">New Post Title</label>
                            <input type="text" name="new-post-title" id="input-post-title" placeholder="New Post Title"
                            onChange={(event) => {newTitle = event.target.value}}></input>
                        </div>
                        <div id="post-price">
                            <label htmlFor="new-post-price">Price</label>
                            <input type="text" name="new-post-price" id="input-post-price" placeholder="Price"
                            onChange={(event) => {newPrice = event.target.value}}></input>
                        </div>
                        <div id="post-location">
                            <label htmlFor="new-post-location">Location</label>
                            <input type="text" name="new-post-location" id="input-post-location" placeholder="Location"
                            onChange={(event) => {newLocation = event.target.value}}></input>
                        </div>
                        <div id="delivery-box">
                            <label htmlFor="new-post-deliverable">Willing to Deliver?</label>
                            <input type="checkbox" name="new-post-deliverable" id="input-post-deliverable" value="deliverable"
                            onChange={(event) => {newDeliverable = event.target.checked}}></input>
                        </div>
                        <div id="post-description">
                            <label htmlFor="new-post-description">Description</label>
                            <textarea name="new-post-description" id="input-post-description" placeholder="Description"
                            onChange={(event) => {newDescription = event.target.value}}></textarea>
                        </div>
                </> : <>
                
                    <div className="post-title">{title}</div>
                    <div className="post-price">{price}</div>
                    <div className="post-seller">{seller}</div>
                    <div className="post-location">{location}</div>
                    <div className="post-deliverable">{deliverable ? "Willing to Deliver" : "Pickup Only"}</div>
                    <div className="post-description">{description}</div>
                </> }
                </div>
        </div>
        <div className="post-buttons">
            {localStorage.getItem("currentUser") ?
                <>
                { (localStorage.getItem("currentUser") === seller) ? 
                    <>
                        {editable ? 
                            <><button className="edit-post-button" 
                                onClick={() => {
                                    editPost();
                                }}>Save Changes</button>
                            <button className="edit-post-button" onClick={() => {setEditable(false)}}>Cancel Changes</button>
                            </> : 
                            <button className="edit-post-button" 
                                onClick={() => {setEditable(true)}}>Edit Post</button>
                        }
                        
                        <button className="delete-post-button"
                            onClick={() => {deletePost(id)}}>Delete Post</button> 
                    </> :
                    <Link to="/NewMessage" className="reply-button" style={{textDecoration: 'none'}}>Reply</Link> 
                }
                </> : ''
            }
        </div>
    </>

}

export default UserPost;