import React, { useState } from 'react'

const Register = () => {
    let [newUsername, setNewUsername] = useState('')
    let [newPassword, setNewPassword] = useState('')

    //store newUsername and newPassword in an object

    return(
        <>
    <h1>Please enter your new username and password</h1>
    <h5 className="registration">*Username and password must be a minimum of 6 characters and a maximum of 40</h5>
        <form onSubmit={(event) => {
            event.preventDefault()
            setNewUsername(document.getElementById("username-input").value)
            setNewPassword(document.getElementById("password-input").value)
            console.log(newUsername)
            console.log(newPassword)
        }}>
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