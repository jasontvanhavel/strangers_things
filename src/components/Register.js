import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-uic-rm-web-ft';

const Register = ({currentUser, setCurrentUser}) => {
    let [newUsername, setNewUsername] = useState('')
    let [newPassword, setNewPassword] = useState('')
    let [message, setMessage] = useState('');

    async function register() {
        let newUser = {user: {username: newUsername, password: newPassword}}

        try {
            let response = (await axios.post(BASE_URL+'/users/register', newUser)).data;
            localStorage.setItem('currentUserToken', response.data.token)

            if (response.success) {
                setCurrentUser(newUser.user.username);
            } else {
                setMessage(response.message)
            }
        } catch (error) {
            console.error(error);
        }

    }

    return(
        <>
    <h1>Please enter your new username and password</h1>
    <form onSubmit={(event) => {
            event.preventDefault();

            
            register()
        }}>{ currentUser ? 
                <> <h1>You are currently logged in as {currentUser}</h1></> 
                :    
            <><div>
                <label htmlFor="username-input"></label>
                <input 
                    type="text" 
                    id="username-input"
                    name="username-input" 
                    placeholder="Username"
                    onChange={(event) => {
                        setNewUsername(event.target.value)
                    }}
                    ></input>
            </div>
            <div>
                <label htmlFor="password-input"></label>
                <input 
                    type="password" 
                    id="password-input"
                    name="password-input" 
                    placeholder="Password"
                    onChange={(event) => {
                        setNewPassword(event.target.value)
                    }}
                    ></input>
            </div>
            <button type='submit'>Submit</button>
            </>
                }
        </form>
        <p>{message}</p>
        </>
    )
}

export default Register
/*  <input 
      placeholder='Enter a todo' 
      value={newTodo}
      onChange={(event) => {
          let value = event.target.value
          setNewTodo(value)
      }}/>
    <button type='submit'>Submit</button>*/