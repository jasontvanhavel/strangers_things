import React from "react";
import UserPost from './UserPost'

const Home = () => {
    return <>
        <UserPost
            title="test title"
            description="test description: blah blah blah lorem ipsum somthing"
            price="test price"
            seller="test seller"
            location="test location"
            deliverable={true}
        />
    </>

}

export default Home