import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://strangers-things.herokuapp.com/api/2104-uic-rm-web-ft';

const Register = () => {
    let [newUsername, setNewUsername] = useState('')
    let [newPassword, setNewPassword] = useState('')

    //store newUsername and newPassword in an object

    // useEffect( () => {
    //     setNewUsername(document.getElementById("username-input").value)
    //     // console.log('use effect username:', newUsername)
    //     setNewPassword(document.getElementById("password-input").value)
    //     // console.log('password:', newPassword)
    // }, [newUsername, newPassword])

    async function postNewUser() {
        let newUser = {user: {username: newUsername, password: newPassword}}
        console.log(newUser)
        
        console.log((await axios.post(BASE_URL+'/users/register', newUser)).data)

    }

    return(
        <>
    <h1>Please enter your new username and password</h1>
    <h5 className="registration">*Username and password must be a minimum of 6 characters and a maximum of 40</h5>
        <form onSubmit={(event) => {
            event.preventDefault();

            
            postNewUser()
            // setNewUsername(document.getElementById("username-input").value)
            // setNewPassword(document.getElementById("password-input").value)

            // console.log(newUsername)
            // console.log(newPassword)

        }}>
            <div>
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
        </form>
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