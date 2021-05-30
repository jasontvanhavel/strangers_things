import React from 'react';
import './myposts.css';

const MyPosts = ({currentUser, }) => {
    if (currentUser === '') {
    return (<h1>Please login.</h1>)
    } 

    return <div id="my-posts">
        <h1>My Posts</h1>
        <h3>You have no posts.  Click New Post in the navigation bar to get started.</h3>
    </div>
    
}

export default MyPosts;