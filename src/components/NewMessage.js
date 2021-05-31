import React from 'react'

const newMessage = () => {
    return (
    <div className="message-card">
        <form>
            <h3>To:</h3>
            <textarea placeholder = "Type message here."></textarea>
            <h3>Original Post URL</h3>
            <input type = "submit"></input>
        </form>
    </div>
    )
}

export default newMessage