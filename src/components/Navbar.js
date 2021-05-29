import React from "react";
import NavbarLink from "./NavbarLink";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";



const Navbar = (props) => {

    return <div>
        <Link to="/Register"><NavbarLink text="Register"/></Link>
        <Link to="/login"><NavbarLink text="Login"/></Link>
        <NavbarLink text="Logout"/>
        <Link to="/Home"><NavbarLink text="Home"/></Link>
        <Link to="/NewPost"><NavbarLink text="New Post"/></Link>
        <NavbarLink text="My Posts"/>
        <NavbarLink text="My Messages"/>
    </div>
}



export default Navbar;