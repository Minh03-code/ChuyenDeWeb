import React from "react";
import './Nav.scss';
import {
    Route,
    Link,NavLink
  } from "react-router-dom";
class Nav extends React.Component{
    render(){
        return(
            <div className="topnav">
            <NavLink to="/" exact="true" activeclassname="active">Login</NavLink>
            <NavLink to="/admin">Admin</NavLink>
            </div>
        )
    }
}
export default Nav;