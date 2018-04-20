import React from "react";
import "./Nav.css";

const Navbar = props => (
    <nav className="navbar navbar-default">
        <div className="container-fluid"> 
            <ul className="nav nav-tabs">
                <li role="presentation" className="active"><a href="/">Pokemon Clicky Game</a></li>
                <li role="presentation">Click an Image to Game</li>
                <li role="presentation"> Score :{props.score} || Highest Score: {props.topScore}</li>
            </ul>
        </div>
    </nav>
);

export default Navbar;