import React from "react";
import NavbarLink from "./NavbarLink";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";



const Navbar = (props) => {

    return <Router><div>
        <NavbarLink text="Register"/>
        <NavbarLink text="Login"/>
        <NavbarLink text="Logout"/>
        <Link to="/Home">{/*<NavbarLink text="Home"/>*/}Home</Link>
        <NavbarLink text="New Post"/>
        <NavbarLink text="My Posts"/>
        <NavbarLink text="My Messages"/>
    </div></Router>
}



export default Navbar;