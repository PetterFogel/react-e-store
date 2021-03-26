import React, { Component } from "react";
import { CartContext } from "../../contexts/CartContext";
import "../../style/cartItems.css";

class CartItems extends Component {
  context!: React.ContextType<typeof CartContext>;
  static contextType = CartContext;

  render() {
    return (
      <div className="orderProduct-container">
        {this.context.orderCart.map((product) => (
          <div className="orderInfo-item">
            <div>
              <h5>{product.title}</h5>
              <div className="orderPrice">
                <img className="order-img" src={product.image} alt="" />
                <p>{`X ${product.quantity}`}</p>
                <p>
                  {`${product.quantity * product.price} SEK`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CartItems;
