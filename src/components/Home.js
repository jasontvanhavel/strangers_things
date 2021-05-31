import React from "react";
import UserPost from './UserPost'

const [posts, setPosts] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

function postMatches(post, text) {
  // return true if any of the fields you want to check against include the text
  // strings have an .includes() method 
}

const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
const postsToDisplay = searchTerm.length ? filteredPosts : posts;

// then, in our jsx below... map over postsToDisplay instead of posts

const Home = ({currentUser}) => {
    console.log(currentUser)
    
    return <>
        <UserPost
            title="test title"
            description="test description: blah blah blah lorem ipsum somthing"
            price="test price"
            seller="test seller"
            location="test location"
            deliverable={true}
            currentUser={currentUser}
        />
    </>

}

export default Home