import React from "react";
import NavbarLink from "./NavbarLink";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './navbar.css';



const Navbar = ({currentUser, setCurrentUser, currentPassword, setCurrentPassword}) => {
    let handleLogoutClick = () => {
        if (currentUser) {
        setCurrentUser('') 
        setCurrentPassword('')
        // console.log({currentUser})
        // console.log({currentPassword})
    }
    }

    let handleOtherClick = () => {

    }

    return <div id="navbar-div">
        {!currentUser ? <>
        <Link to="/Register" style={{textDecoration: 'none'}}><NavbarLink text="Register" clickHandler={handleOtherClick}/></Link>
        <Link to="/login" style={{textDecoration: 'none'}}><NavbarLink text="Login" clickHandler={handleOtherClick}/></Link>
        </> : <Link to="/Home" style={{textDecoration: 'none'}}><NavbarLink text="Logout" clickHandler={handleLogoutClick}/></Link>}
        
        <Link to="/Home" style={{textDecoration: 'none'}}><NavbarLink text="Home" clickHandler={handleOtherClick}/></Link>
        {currentUser ? <>
        <Link to="/NewPost" style={{textDecoration: 'none'}}><NavbarLink text="New Post" clickHandler={handleOtherClick}/></Link>
        <Link to="/MyPosts" style={{textDecoration: 'none'}}><NavbarLink text="My Posts" clickHandler={handleOtherClick}/></Link>
        <Link to="/MyMessages" style={{textDecoration: 'none'}}><NavbarLink text="My Messages" clickHandler={handleOtherClick}/></Link>
        </> : '' }
    </div>
}



export default Navbar;