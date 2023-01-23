import { FC, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../contexts/CartContext";
import { BurgerMenu } from "../burger-menu/BurgerMenu";
import "../../../style/Header.css";

export const Header: FC = () => {
  const { cart } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="main-header">
      <Link
        style={{ textDecoration: "none" }}
        to="/"
        onClick={() => setIsMenuOpen(false)}
      >
        <h2 className="header-title">SHOEWAY</h2>
      </Link>
      <nav>
        <ul
          className="nav-links"
          style={{
            right: isMenuOpen ? "0%" : "-100%",
          }}
        >
          <Link
            className="link"
            to="/products"
            onClick={() => setIsMenuOpen(false)}
          >
            <li className="link">PRODUCTS</li>
          </Link>
          <Link
            className="link"
            to="/about"
            onClick={() => setIsMenuOpen(false)}
          >
            <li>ABOUT</li>
          </Link>
          <Link
            className="link"
            to="/admin"
            onClick={() => setIsMenuOpen(false)}
          >
            <li>ADMIN</li>
          </Link>
        </ul>
        <Link
          className="cart-link"
          to="/checkout"
          onClick={() => setIsMenuOpen(false)}
        >
          CART({cart.length})
        </Link>
        <BurgerMenu
          value={isMenuOpen}
          onBurgerMenuOpenClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </nav>
    </header>
  );
};
