import React from 'react';
import axios from 'axios';
import './newpost.css';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-uic-rm-web-ft';

const NewPost = ({currentUser, }) => {
    if (currentUser === '') {
    return (<h1>Please login.</h1>)
    }

    let token = localStorage.getItem('currentUserToken')

    async function createNewPost () {
        
        let newPost = { post: {
                        title: document.getElementById("new-post-title").value,
                        description: document.getElementById("new-post-description").value,
                        price: document.getElementById("new-post-price").value,
                        willDeliver: document.getElementById("new-post-deliverable").checked,
                }}
                console.log(newPost)
        try {
            let response = (await axios.post(BASE_URL+'/posts', 
            newPost, 
            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }
        )).data;

        console.log(response)

        } catch (error) {
            console.error(error);
        }

        
    }

    return (<div id="new-post">
        <h1>Create New Post</h1>
        <form id="new-post-form" onSubmit={function(event) 
            {event.preventDefault() 
            createNewPost()}}>
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
                <input type="checkbox" name="new-post-deliverable" id="new-post-deliverable" value="deliverable"></input>
            </div>
            <div id="post-description">
                <label htmlFor="new-post-description">Description</label>
                <textarea name="new-post-description" id="new-post-description" placeholder="Description"></textarea>
            </div>
            <input type="submit" id="submit-button"></input>
        </form>
    </div>)
}

export default NewPost;