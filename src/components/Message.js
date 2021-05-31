import React from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import NewMessage from './NewMessage'
import './message.css'


const Message = () => {
   return(
        <div className="message-card">
            <h3>From:</h3>
            <div className="user-message">Message from other user</div>
            <h3>Original Post URL</h3>
            <Link to="/NewMessage" className="reply-button" style={{textDecoration: 'none'}}>Reply</Link>
        </div>
   )
}

export default Message