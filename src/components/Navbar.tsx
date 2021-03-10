import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function Navbar() {
    return (
      <header className="main-header">
        <Link style={{ textDecoration: "none" }} to="/">
          <h2 className="header-title">ShoeWay</h2>
        </Link>
        <nav>
          <ul className="nav-links">
            <Link
              style={{ textDecoration: "none", color: "#000" }}
              to="/products"
            >
              <li>Products</li>
            </Link>
            <li>
              <Link to="/checkout">
                <ShoppingCartOutlinedIcon />
              <Link to="/checkout" style={{ color: "#333" }}>
                <ShoppingCartOutlinedIcon/>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}

export default Navbar
