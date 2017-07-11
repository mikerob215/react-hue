import React from 'react';
import {NavLink} from "react-router-dom";

const Nav = () =>
    <nav>
        <div className="nav-wrapper">
            <a href="" className="brand-logo">React Hue</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/hubs" activeClassName="active">Hubs</NavLink></li>
            </ul>
        </div>
    </nav>;

export default Nav;