import React, {useEffect} from "react";
import NavbarLink from "./NavbarLink";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './navbar.css';



const Navbar = ({currentUser, currentUserState, setCurrentUserState}) => {
    let handleLogoutClick = () => {
        if (localStorage.getItem('currentUser')) {
            localStorage.clear();
            setCurrentUserState('');
        // console.log({currentUser})
        // console.log({currentPassword})
    }
    }

    let handleOtherClick = () => {

    }

    useEffect(() => {
        setCurrentUserState(localStorage.getItem('currentUser'))
    }, [localStorage.getItem('currentUser')])

    return <div id="navbar-div">
        {!(currentUserState) ? <>
        {/* The only way we could remove the underlines was through the inline textDecoration thing.  Separate
        CSS just refused to work for some reason.  Worked for other CSS properties, though, like color */}
        <Link to="/Register" style={{textDecoration: 'none'}}><NavbarLink text="Register" clickHandler={handleOtherClick}/></Link>
        <Link to="/login" style={{textDecoration: 'none'}}><NavbarLink text="Login" clickHandler={handleOtherClick}/></Link>
        </> : 
        <Link to="/Home" style={{textDecoration: 'none'}}><NavbarLink text="Logout" clickHandler={handleLogoutClick}/></Link>}
        
        <Link to="/Home" style={{textDecoration: 'none'}}><NavbarLink text="Home" clickHandler={handleOtherClick}/></Link>
        {(currentUserState) ? <>
        <Link to="/NewPost" style={{textDecoration: 'none'}}><NavbarLink text="New Post" clickHandler={handleOtherClick}/></Link>
        <Link to="/MyPosts" style={{textDecoration: 'none'}}><NavbarLink text="My Posts" clickHandler={handleOtherClick}/></Link>
        <Link to="/MyMessages" style={{textDecoration: 'none'}}><NavbarLink text="My Messages" clickHandler={handleOtherClick}/></Link>
        </> : '' }
    </div>
}



export default Navbar;