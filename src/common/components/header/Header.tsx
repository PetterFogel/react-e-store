import { FC, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { BurgerMenu } from "../burger-menu/BurgerMenu";
import { CartContext } from "../../../contexts/CartContext";
import { homePageStyles } from "./style/headerStyles";
import { routeFactory } from "../../../route-factory/routeFactory";

export const Header: FC = () => {
  const classes = homePageStyles();
  const { cart } = useContext(CartContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={classes.header}>
      <Link
        style={{ textDecoration: "none" }}
        to={routeFactory.homeScreen()}
        onClick={() => setIsMenuOpen(false)}
      >
        <Typography variant="h3">THE MANY SAINTS</Typography>
      </Link>
      <nav className={classes.nav}>
        <ul
          className={classes.ul}
          style={{
            right: isMenuOpen ? "0%" : "-100%",
          }}
        >
          <Link
            className={classes.link}
            to={routeFactory.productScreen.products()}
            onClick={() => setIsMenuOpen(false)}
          >
            <li className="link">PRODUCTS</li>
          </Link>
          <Link
            className={classes.link}
            to={routeFactory.aboutScreen()}
            onClick={() => setIsMenuOpen(false)}
          >
            <li>ABOUT</li>
          </Link>
          <Link
            className={classes.link}
            to={routeFactory.adminScreen.admin()}
            onClick={() => setIsMenuOpen(false)}
          >
            <li>ADMIN</li>
          </Link>
        </ul>
        <Link
          className={classes.cartLink}
          to={routeFactory.checkoutScreen.checkout()}
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
