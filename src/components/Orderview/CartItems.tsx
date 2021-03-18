import React, { Component } from "react";
import { CartContext } from "../../contexts/CartContext";
import "../../style/cartItems.css";

class CartItems extends Component {
  context!: React.ContextType<typeof CartContext>;
  static contextType = CartContext;

  render() {
    return (
      <div className="orderView-container">
        {this.context.orderCart.map((product) => (
          <div className="order-div">
            <h3>{product.title}</h3>
            <img src={product.image}></img>
            <div className="order-listings">
            <p>Pris:</p>
            <p>{product.price + "kr"}</p>
            </div>
            <div className="order-listings">
            <p>Antal:</p>
            <p>{product.quantity + "st"}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CartItems;
