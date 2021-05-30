import React from "react";
import UserPost from './UserPost'

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