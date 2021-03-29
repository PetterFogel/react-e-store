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
              <div>
                <div className="item">
                  <h5 className="title">{product.title}</h5>
                  <img className="order-img" src={product.image} alt="" />
                  <p>{`X ${product.quantity}`}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CartItems;
