import React, { useState, useEffect } from 'react'

const Login = () => {
    let [Username, setUsername] = useState('')
    let [Password, setPassword] = useState('')

    //store Username and Password in an object

    useEffect( () => {
        setUsername(document.getElementById("username-input").value)
        // console.log('use effect username:', Username)
        setPassword(document.getElementById("password-input").value)
        // console.log('password:', Password)
    }, [Username, Password])

    return(
        <>
    <h1>Please enter your  username and password</h1>
        <form onSubmit={(event) => {
            event.preventDefault();
            setUsername(document.getElementById("username-input").value)
            setPassword(document.getElementById("password-input").value)
            // console.log(Username)
            // console.log(Password)
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

export default Login
/*  <input 
      placeholder='Enter a todo' 
      value={Todo}
      onChange={(event) => {
          let value = event.target.value
          setTodo(value)
      }}/>
    <button type='submit'>Submit</button>*/