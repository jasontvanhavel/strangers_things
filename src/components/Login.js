import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'

const Login = ({currentUser, setCurrentUser, currentPassword, setCurrentPassword}) => {

    //store Username and Password in an object

    useEffect( () => {
        setCurrentUser(document.getElementById("username-input").value)
        // console.log('use effect username:', Username)
        setCurrentPassword(document.getElementById("password-input").value)
        // console.log('password:', Password)
    }, [currentUser, currentPassword])

    let loginHandler = () => {
            setCurrentUser(document.getElementById("username-input").value)
            setCurrentPassword(document.getElementById("password-input").value)
            // console.log(Username)
            // console.log(Password)
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
                    ></input>
            </div>
            <div>
                <label htmlFor="password-input"></label>
                <input 
                    type="password" 
                    id="password-input"
                    name="password-input" 
                    placeholder="Password"
                    ></input>
            </div><Link to="/Home" onClick={loginHandler}>Submit</Link>
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