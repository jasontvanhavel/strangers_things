import React from 'react'
import "./mymessages.css"
import Message from './Message'

const MyMessages = () => {
    return (
        <div className="message-board">
        <h1>My Messages</h1>
            <Message />
        </div>
    )
}

export default MyMessages