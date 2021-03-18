import React, { Component } from "react";
import { UserContext } from "../../contexts/UserContext";
import "../../style/cartItems.css";
import { Guid } from 'js-guid';

class UserInput extends Component {
  context!: React.ContextType<typeof UserContext>;
  static contextType = UserContext;

  render() {
    return (
      <div className="orderView-container">
        <div className="orderlisting-div">
            <div className="order-listings">
              <h5>Name:</h5>
              <p>{this.context.user.name}</p>
            </div>
            <div className="order-listings">
              <h5>Emailadress:</h5>
              <p>{this.context.user.email}</p>
            </div>
            <div className="order-listings">
              <h5>Phonenumber:</h5>
              <p>{this.context.user.phone}</p>
            </div>
            <div className="order-listings">
              <h5>Adress:</h5>
              <p>{this.context.user.adress}</p>
            </div>
            <div className="order-listings">
              <h5>Zip-Code:</h5>
              <p>{this.context.user.zip}</p>
            </div>
            <div className="order-listings">
              <h5>Shipping:</h5>
              <p>{this.context.delivery.company}</p>
            </div>
            <div className="order-listings">
              <h5>Date of delivery: </h5>
              <p>{this.context.delivery.date}</p>
            </div>
            <div className="order-listings">
              <h5>OrderNr:</h5>
              <p>{Guid.newGuid().toString()}</p>
            </div>
        </div>
      </div>
    );
  }
}

export default UserInput;
