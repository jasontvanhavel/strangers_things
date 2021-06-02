import React, { useState, useEffect} from 'react';
import './myposts.css';
import axios from 'axios';
import UserPost from './UserPost';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-uic-rm-web-ft';


const MyPosts = ({currentUser}) => {
    if (currentUser === '') {
    return (<h1>Please login.</h1>)
    } 

    const [posts, setPosts] = useState([]);

    async function getPosts() {
        let data = (await axios.get(BASE_URL + '/posts')).data
        return data.data.posts;
    }

    useEffect ( async () =>{
        setPosts(await getPosts());
    }, [])

    const postMatches = function(post, term) {
        if (post.author.username.includes(term)){
                return true;
            } else {
                return false;
            }
    }

    const filteredPosts = posts.filter(post => postMatches(post, localStorage.getItem('currentUser')));

    return <>
    {filteredPosts.map( (post) => {
        return <UserPost
            title={post.title}
            description={post.description}
            price={post.price}
            seller={post.author.username}
            location={post.location}
            deliverable={post.willDeliver}
            currentUser={currentUser}
            key={post._id}
            id={post._id}
        />})
    }
</>
    
}

export default MyPosts;