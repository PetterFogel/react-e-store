import React, { Component } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import '../../style/Checkout.css';
import { Button } from '@material-ui/core';
import { btnMedium, cursorPointer } from '../../style/GeneralStyle';

import { CartContext } from '../../contexts/CartContext';


import Modal from './Modal';
import { CSSProperties } from '@material-ui/styles';

  
interface Props {}
interface State {
    isModalOpen: boolean;
}

class Checkout extends Component<Props, State> { 
  context!: React.ContextType<typeof CartContext>
  static contextType = CartContext; 
    
  state: State = {
        isModalOpen: false
    }

    openModal = () => this.setState({ isModalOpen: true });
    
    closeModal = () => this.setState({ isModalOpen: false });

    render() {
        return (
            <div className="checkout-container">
                <div className="details-container">
                    <form action="/">
                      <h2 className="checkout-title">Checkout</h2>
                        <div className="detail-holder" onClick={this.openModal}>
                            <p>Personaldetails</p>
                            <CheckIcon style={{ fontSize: "2rem" }}/>
                        </div>
                        <div className="detail-holder" onClick={this.openModal}>
                            <p>Deliverydetails</p>
                            <CheckIcon style={{ fontSize: "2rem" }}/>
                        </div>
                        <div className="detail-holder" onClick={this.openModal}>
                            <p>Paymentdetails</p>
                            <CheckIcon style={{ fontSize: "2rem" }}/>
                        </div>
                    </form>
                    <Button variant="contained" style={btnMedium}>Confirm Order</Button>
                </div>
                <div className="order-container">
                    <div className="order-list">
                        <h2>Order Summary</h2>
                        {this.context.cart.map((productValue) =>  
                        <div className="order-item">
                            <p className="order-name">{productValue.title}</p>
                            <img className="imageStyle" src={productValue.image} alt=""/>
                            <div className="price-holder">
                                <p className="order-price">{productValue.price}</p>
                                <CloseIcon onClick={() => this.context.removeFromCart(productValue)}
                                style={{ 
                                    ...cursorPointer, 
                                    fontSize: "2rem" 
                                }}/>
                            </div>
                        </div>
                        )}
                    </div>
                    <div className="total-amount-container">
                        <strong className="total-amount">Total Amount:</strong>
                        <p>1399.99</p>
                    </div>
                </div>
                {this.state.isModalOpen && (
                <div>
                    <Button 
                        variant="contained"
                        style={{ ...btnMedium, ...BtnAbsolut }}
                        onClick={this.closeModal}>
                        Close
                    </Button>
                    <Modal shouldClose={this.closeModal}/>
                </div>
                )}
            </div>
        );
    }
}

const BtnAbsolut: CSSProperties = {
    zIndex: 200,
    position: "absolute",
    bottom: "5%",
    left: "50%",
    transform: "translate(-50%, -50%)"

}

export default Checkout
