import React, {useState, useEffect} from "react";
import axios from 'axios';
import UserPost from './UserPost'


const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-uic-web-ft';


function postMatches(post, text) {
  // return true if any of the fields you want to check against include the text
  // strings have an .includes() method 
}



// then, in our jsx below... map over postsToDisplay instead of posts

const Home = ({currentUser}) => {

    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

   

    async function getPosts() {
        let data = (await axios.get(BASE_URL + '/posts')).data
        return data.data.posts;
    }

    useEffect ( async () =>{
        setPosts(await getPosts());
    }, [])

    useEffect ( () => {
        setSearchTerm(document.getElementById('search-bar').value);

        const postMatches = function(post, term){
            if (post.title.includes(term) || post.description.includes(term) ||
                post.price.includes(term) || post.author.username.includes(term) || post.location.includes(term)){
                    return true;
                } else {
                    return false;
                }
        }

        const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
        const postsToDisplay = searchTerm.length ? filteredPosts : posts;
    }, [document.getElementById('search-bar').value])

    console.log(posts)

    return <>
    { currentUser ? 
        <>
            {posts.map( (post) => {
                return <UserPost
                    title={post.title}
                    description={post.description}
                    price={post.price}
                    seller={post.author.username}
                    location={post.location}
                    deliverable={post.willDeliver}
                    currentUser={currentUser}
                    key={post._id}
                />})
            }
        </> :
        <>
            {posts.map( (post) => {
                return <UserPost
                    title={post.title}
                    description={post.description}
                    price={post.price}
                    seller={post.author.username}
                    location={post.location}
                    deliverable={post.willDeliver}
                    currentUser={currentUser}
                    key={post._id}
                />})
            }
        </>
    }
    </>

}

export default Home