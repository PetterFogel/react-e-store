import React, { Component } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import '../../style/Checkout.css';
import { btnMedium, cursorPointer } from '../../style/GeneralStyle';
import { CartContext } from '../../contexts/CartContext';
import Modal from './Modal';
import { CSSProperties } from '@material-ui/styles';
import '../../style/Form.css';
import { Button } from '@material-ui/core';
import Accordian from './Accordian';
  
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
                <Accordian/>
              </form>
              <Button variant="contained" style={btnMedium}>
                Confirm Order
              </Button>
            </div>

            <div className="order-container">
              <div className="order-list">
                <h2>Order Summary</h2>
                {this.context.cart.map((productValue) => (
                  <div className="order-item">
                    <p className="order-name">{productValue.title}</p>
                    <img
                      className="imageStyle"
                      src={productValue.image}
                      alt=""
                    />
                    <div className="price-holder">
                      <p className="order-price">
                        {productValue.price + " " + "sek"}
                      </p>
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
                  </div>
                ))}
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
                  onClick={this.closeModal}
                >Close</Button>
                <Modal shouldClose={this.closeModal} />
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

const form: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem 2rem',
    background: 'lightgrey',
    fontSize: '1.2rem'

}

export default Checkout
