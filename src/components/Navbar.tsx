import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { CartContext } from '../contexts/CartContext'


class Navbar extends Component {
    context!: React.ContextType<typeof CartContext>
    static contextType = CartContext;
    
    render() {    
      return (
        <header className="main-header">
          <Link style={{ textDecoration: "none" }} to="/">
            <h2 className="header-title">ShoeWay</h2>
          </Link>
          <nav>
            <ul className="nav-links">
              <Link style={{textDecoration: 'none', color: '#000'}} to="/products">
                <li>Products</li>
              </Link>
              <li>
                <Link to="/checkout" style={{ color: "#333" }}>
                  <ShoppingCartOutlinedIcon/>
                 </Link>
              </li>
              <li>
                {this.context.cart.length}
              </li>
            </ul>
          </nav>
        </header>
      );
    }
}

export default Navbar
