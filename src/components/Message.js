import React from 'react'
import './message.css'

const Message = () => {
   return(
        <div className="message-card">
            <h3>From:</h3>
            <div className="user-message">Message from other user</div>
            <h3>Original Post URL</h3>
            <button>Reply</button>
        </div>
   )
}

export default Message