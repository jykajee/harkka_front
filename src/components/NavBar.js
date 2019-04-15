import React, { Component } from "react";
import { Link } from "react-router-dom";
import './NavBar.css';


export default class NavBar extends Component {

    render(){
        return (
            <div className="NavbarWrapper">
                <ul>
                    <li><Link to="/">Muistiinpanot</Link></li>
                    <li><Link to="/login">Kirjaudu</Link></li>
                </ul> 
            </div>
        )
    }
}