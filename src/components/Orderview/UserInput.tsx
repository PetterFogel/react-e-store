import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "../../style/cartItems.css";
import { Guid } from 'js-guid';
import Creditcard from "../Checkout/Accordian/PaymentMethods/Creditcard";
import { CartContext } from "../../contexts/CartContext";



const UserInput = () =>{
  const user = useContext(UserContext)
  const cart = useContext(CartContext)

    return (
      <div>
        <div className="orderView-container">
          <div className="orderlisting-div1">
            <div className="order-listings">
              <h5>Name:</h5>
              <p>{user.name}</p>
            </div>
            <div className="order-listings">
              <h5>Emailadress:</h5>
              <p>{user.email}</p>
            </div>
            <div className="order-listings">
              <h5>Phonenumber:</h5>
              <p>{user.phone}</p>
            </div>
            <div className="order-listings">
              <h5>Adress:</h5>
              <p>{user.adress}</p>
            </div>
          </div>

          <div className="orderlisting-div2">
            <div className="order-listings">
              <h5>Zip-Code:</h5>
              <p>{user.zip}</p>
            </div>
            <div className="order-listings">
              <h5>Shipping:</h5>
              <p>{user.delivery.company}</p>
            </div>
            <div className="order-listings">
              <h5>Date of delivery: </h5>
              <p>{user.delivery.date}</p>
            </div>
            <div className="order-listings">
              <h5>OrderNr:</h5>
              <p>{Guid.newGuid().toString()}</p>
            </div>
          </div>
        </div>
        <div className="total-price">
          <h5>Total price</h5>
          {`${user.shippingPriceState + cart.orderAmount} SEK`}
        </div>
      </div>
    );
}

export default UserInput;
