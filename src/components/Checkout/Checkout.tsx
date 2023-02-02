import {
  inactiveBtn,
  btnMedium,
  cursorPointer
} from "../../style/GeneralStyle";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";
import Accordian from "./Accordian/Accordian";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import "../../style/Form.css";
import "../../style/Checkout.css";
import { routeFactory } from "../../common/constants/routeFactory";

const Checkout = () => {
  const cartContext = useContext(CartContext);
  const userContext = useContext(UserContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
      <div className="checkout-container">
        <div className="details-container">
          <form action="/">
            <h2 className="checkout-title">Checkout</h2>
            <Accordian />
          </form>
        </div>
        <div className="order-container">
          <div className="order-list">
            <h2>Order Summary</h2>
            <div className="overflow-scroll-container">
              {cartContext.cart.map((productValue) => (
                <div key={productValue.id} className="order-item">
                  <div className="image-holder">
                    <img
                      className="imageStyle"
                      src={productValue.image}
                      alt=""
                    />
                  </div>
                  <div className="info-container">
                    <p className="order-name">{productValue.title}</p>
                    <p className="order-qty">{"Size: " + productValue.size}</p>
                    <div className="price-holder">
                      <div>
                        <AddCircleIcon
                          className="amount-icons"
                          onClick={() => cartContext.addToCart(productValue)}
                        />
                        <RemoveCircleIcon
                          className="amount-icons"
                          onClick={() =>
                            cartContext.deleteItemQty(productValue.id)
                          }
                        />
                      </div>
                      <div className="order-qty-holder">
                        <p className="order-qty">{`X ${productValue.quantity}`}</p>
                        <p className="order-price">
                          {`${productValue.quantity * productValue.price} SEK`}
                        </p>
                      </div>
                    </div>
                  </div>
                  <CloseIcon
                    onClick={() => cartContext.removeFromCart(productValue)}
                    style={{
                      ...cursorPointer,
                      fontSize: "2rem"
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="total-amount-container">
            <strong className="total-amount">Tax:</strong>
            <p>{Math.round(cartContext.totalAmount * 0.2) + " SEK"}</p>
          </div>
          <div className="total-amount-container">
            <strong className="total-amount">Delivary:</strong>
            <p>{userContext.shippingPriceState + " SEK"}</p>
          </div>
          <div className="total-amount-container">
            <strong className="total-amount">Total Amount:</strong>
            <p>
              {cartContext.totalAmount +
                userContext.shippingPriceState +
                " SEK"}
            </p>
          </div>
        </div>
      </div>
      {userContext.shopState ? (
        <Link
          to={routeFactory.checkoutScreen.orderView()}
          style={{ zIndex: 1, margin: "2rem 0rem" }}>
          <Button
            onClick={userContext.shopStateFalse}
            variant="contained"
            style={btnMedium}>
            {" "}
            Confirm Order
          </Button>
        </Link>
      ) : (
        <Button variant="contained" style={inactiveBtn}>
          {" "}
          Confirm Order
        </Button>
      )}
    </div>
  );
};

export default Checkout;
