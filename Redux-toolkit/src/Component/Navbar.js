import React from 'react';
import { useSelector } from 'react-redux';
import {
    Link,
}from "react-router-dom";

function Navbar(props) {
    const cartProducts = useSelector(state => state.cart) //useSelector will return the state and mention the slice which one you wanna get the data from ex.(state.cart)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/"} href="#">Product</Link>
        </li>      
      </ul>
      <Link className="nav-link" to={"/cart"} href="#">Cart {cartProducts.length}</Link>

    
    </div>
  </div>
</nav>
        </>
    );
}

export default Navbar;