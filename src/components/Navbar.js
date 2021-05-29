import React from "react";
import NavbarLink from "./NavbarLink";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";



const Navbar = (props) => {

    return <div>
        <NavbarLink text="Register"/>
        <NavbarLink text="Login"/>
        <NavbarLink text="Logout"/>
        <Link to="/Home"><NavbarLink text="Home"/></Link>
        <NavbarLink text="New Post"/>
        <NavbarLink text="My Posts"/>
        <NavbarLink text="My Messages"/>
    </div>
}



export default Navbar;