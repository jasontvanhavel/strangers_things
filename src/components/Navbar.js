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
        <Link to="/MyPosts"><NavbarLink text="My Posts"/></Link>
        <Link to="/MyMessages"><NavbarLink text="My Messages"/></Link>
    </div>
}



export default Navbar;