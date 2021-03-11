import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import '../../style/Checkout.css';
import { Button } from '@material-ui/core';
import { btnMedium, cursorPointer } from '../../style/GeneralStyle';
import BankTransfer from './PaymentMethods/BankTransfer';


function Checkout() {
    return (
      <div className="checkout-container">
        <BankTransfer/>
        <div className="details-container">
          <form action="/">
            <div className="detail-holder">
              <p>Personaldetails</p>
              <CheckIcon style={{ fontSize: "2rem" }} />
            </div>
            <div className="detail-holder">
              <p>Deliverydetails</p>
              <CheckIcon style={{ fontSize: "2rem" }} />
            </div>
            <div className="detail-holder">
              <p>Paymentdetails</p>
              <CheckIcon style={{ fontSize: "2rem" }} />
            </div>
          </form>
          <Button variant="contained" style={btnMedium}>
            Confirm Order
          </Button>
        </div>
        <div className="order-container">
          <div className="order-list">
            <h2>Order Summary</h2>
            <div className="order-item">
              <p className="order-name">Dr Martens</p>
              <div className="price-holder">
                <p className="order-price">1399.99</p>
                <CloseIcon style={{ ...cursorPointer, fontSize: "2rem" }} />
              </div>
            </div>
          </div>
          <div className="total-amount-container">
            <p>Total Amount:</p>
            <p>1399.99</p>
          </div>
        </div>
      </div>
    );
}

export default Checkout
