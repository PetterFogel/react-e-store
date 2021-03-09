import React from 'react';
import '../style/Navbar.css'

function Navbar() {
    return (
        <header className="main-header">
            <h2 className="header-title">ShoeWay</h2>
            <nav>
                <ul className="nav-links">
                    <li>Products</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar
