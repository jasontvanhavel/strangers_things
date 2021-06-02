import React, { useState, useEffect } from 'react'
import axios from 'axios';
import currentUser from './App';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-uic-rm-web-ft';

const Login = ({currentUser, setCurrentUserState}) => {
    let [inputUsername, setInputUsername] = useState('');
    let [inputPassword, setInputPassword] = useState('');
    
    let [loginMessage, setLoginMessage] = useState('');

    useEffect (() =>{
        loginMessage="You are now logged in as " + currentUser;

    }, [currentUser])

    async function login () {
        let inputUser = {user: {username: inputUsername, password: inputPassword}}

        try {
            let response = (await axios.post(BASE_URL+'/users/login', inputUser)).data;
            localStorage.setItem('currentUserToken', response.data.token)

            currentUser = inputUser.user.username;
            setCurrentUserState(currentUser)

            localStorage.setItem('currentUser', currentUser);
            setLoginMessage("You are now logged in as " + currentUser)


        } catch (error) {
            setLoginMessage("Sorry, we do not recognize that username and password combination");
        }
    }

    return(
        <>
    <h1>Please enter your  username and password</h1>
            <div>
                <label htmlFor="username-input"></label>
                <input 
                    type="text" 
                    id="username-input"
                    name="username-input" 
                    placeholder="Username"
                    onChange={(event) => {
                        setInputUsername(event.target.value);
                        console.log(inputUsername)
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
                    onChange={(event) =>{
                        setInputPassword(event.target.value);
                    }}
                    ></input>
            </div><div className="reply-button" style={{textDecoration: 'none'}}
            onClick={() => {
                login();
                // currentUser ? <div id="message-div"></div> :
                
            }}>Submit</div>
        <div id="login-message">{loginMessage}</div>
        </>
    )
}

export default Login
/*  <input 
      placeholder='Enter a todo' 
      value={Todo}
      onChange={(event) => {
          let value = event.target.value
          setTodo(value)
      }}/>
    <button type='submit'>Submit</button>*/