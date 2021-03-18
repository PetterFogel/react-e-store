import React, { Component } from "react";
import CloseIcon from "@material-ui/icons/Close";
import "../../style/Checkout.css";
import { btnMedium, cursorPointer } from "../../style/GeneralStyle";
import { CartContext } from "../../contexts/CartContext";
import Modal from "./Modal";
import { CSSProperties } from "@material-ui/styles";
import "../../style/Form.css";
import { Button } from "@material-ui/core";
import Accordian from "./Accordian/Accordian";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Link } from "react-router-dom";

interface Props {}
interface State {
  isModalOpen: boolean;
}

class Checkout extends Component<Props, State> {
  context!: React.ContextType<typeof CartContext>;
  static contextType = CartContext;

  state: State = {
    isModalOpen: false,
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className="checkout-container">
          <div className="details-container">
            <form action="/" style={form}>
              <h2 className="checkout-title">Checkout</h2>
              <Accordian />
            </form>
          </div>
          <div className="order-container">
            <div className="order-list">
              <h2>Order Summary</h2>
              <div className="test">
                {this.context.cart.map((productValue) => (
                  <div className="order-item">
                    <img
                      className="imageStyle"
                      src={productValue.image}
                      alt=""
                    />
                    <div className="info-container">
                      <p className="order-name">{productValue.title}</p>
                      <div className="price-holder">
                        <div>
                          <AddCircleIcon
                            className="amount-icons"
                            onClick={() =>
                              this.context.addToCart(productValue)
                            }
                          />
                          <RemoveCircleIcon
                            className="amount-icons"
                            onClick={() =>
                              this.context.deleteItemQty(productValue)
                            }
                          />
                        </div>
                        <p className="order-qty">{`X ${productValue.quantity}`}</p>
                        <p className="order-price">
                          {`${
                            productValue.quantity * productValue.price
                          } SEK`}
                        </p>
                      </div>
                    </div>
                    <CloseIcon
                      onClick={() =>
                        this.context.removeFromCart(productValue)
                      }
                      style={{
                        ...cursorPointer,
                        fontSize: "2rem",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="total-amount-container">
              <strong className="total-amount">Total Amount:</strong>
              <p>{this.context.totalAmount + " " + "SEK"}</p>
            </div>
          </div>
      </div>
      <Link to="/orderview" style={{textDecoration: 'none', zIndex: 1, margin: "2rem 0rem"}}>
        <Button variant="contained" style={btnMedium}> Confirm Order</Button>
      </Link>          
  </div>
    );
  }
}

const form: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "0.5rem 1rem",
  fontSize: "1.2rem",
};

export default Checkout;
