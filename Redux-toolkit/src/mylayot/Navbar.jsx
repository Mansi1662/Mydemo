import React from 'react';
import {
    Link,
}from "react-router-dom";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img src="img/Logo.png" className='navbar-brand' alt="" />
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto ">
                        <li className="nav-item">
                        <Link className="nav-link " aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href="#">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" href="#">Login</Link>
                        </li>
                        
                    </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;