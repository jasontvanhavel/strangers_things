import React from 'react';

const NavbarLink = (props) => {
    console.log(props.text)
    return <h1 onClick = {() => {props.clickHandler()}}>{props.text}</h1>
}

export default NavbarLink;