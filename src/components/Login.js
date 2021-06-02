import React, { useState, useEffect } from 'react'
import axios from 'axios';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-uic-rm-web-ft';

const Login = ({currentUser, setCurrentUser}) => {
    let [inputUsername, setInputUsername] = useState('');
    let [inputPassword, setInputPassword] = useState('');
    
    let loginMessage = ""

    useEffect (() =>{
        loginMessage="You are now logged in as " + currentUser;
        // document.getElementById("message-div").innerText(loginMessage)

    }, [currentUser])

    async function login () {
        let inputUser = {user: {username: inputUsername, password: inputPassword}}

        try {
            let response = (await axios.post(BASE_URL+'/users/login', inputUser)).data;
            localStorage.setItem('currentUserToken', response.data.token)

            setCurrentUser(inputUser.user.username);

            console.log('inputUser.user.username', inputUser.user.username)
            localStorage.setItem('currentUser', currentUser);
            console.log("currentUser:", currentUser)


        } catch (error) {
            loginMessage="Sorry, we do not recognize that username and password combination";
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
                // setMessage("You are now logged in as " + currentUser)
            }}>Submit</div>

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