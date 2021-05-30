import React from 'react'
import "./mymessages.css"
import Message from './Message'

const MyMessages = ({currentUser, }) => {
    if (currentUser === '') {
    return (<h1>Please login.</h1>)
    }

    return (
        <div className="message-board">
        <h1>My Messages</h1>
            <Message />
        </div>
    )
}

export default MyMessages