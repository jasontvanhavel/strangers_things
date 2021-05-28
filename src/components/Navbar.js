import React from "react";
import NavbarLink from "./NavbarLink";



const Navbar = (props) => {

    return <div>
        <NavbarLink text="Register"/>
        <NavbarLink text="Login"/>
        <NavbarLink text="Logout"/>
        <NavbarLink text="Home"/>
        <NavbarLink text="New Post"/>
        <NavbarLink text="My Posts"/>
        <NavbarLink text="My Messages"/>
    </div>
}



export default Navbar;