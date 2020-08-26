import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className="header" className="alt">
                <h1>Marketing app</h1>
                <nav>
                </nav>
            </header>
            <nav className="menu">
                <div className="inner">
                    <h2>Menu</h2>
                    <ul className="links">
                        <NavLink to="/" activeClassName="is-active">Home</NavLink>
                        <NavLink to="/about" activeClassName="is-active">About</NavLink>
                        <NavLink to="/product" activeClassName="is-active">Product</NavLink>
                        <NavLink to="/contact" activeClassName="is-active">Contact</NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    );

};


export default Header;
