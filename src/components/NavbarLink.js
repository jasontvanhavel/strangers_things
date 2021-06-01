import React from 'react';

const NavbarLink = (props) => {
    return <h1 onClick = {() => {props.clickHandler()}}>{props.text}</h1>
}

export default NavbarLink;