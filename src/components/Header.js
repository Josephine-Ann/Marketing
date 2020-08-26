import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => (
    <div>
        <header id="header" className="alt">
            <h1><a href="index.html">Solid State</a></h1>
            <nav>
                <a href="#menu">Menu</a>
            </nav>
        </header>

        <nav id="menu">
            <div className="inner">
                <h2>Menu</h2>
                <ul className="links">
                    <li><NavLink to="/" activeClassName="is-active">Home</NavLink></li>
                    <li><NavLink to="/about" activeClassName="is-active">About</NavLink></li>
                    <li><NavLink to="/product" activeClassName="is-active">Product</NavLink></li>
                    <li><NavLink to="/contact" activeClassName="is-active">Contact</NavLink></li>
                </ul>
                <a href="#" className="close">Close</a>
            </div>
        </nav>
    </div>

)

export default Header;
