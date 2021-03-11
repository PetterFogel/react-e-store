import React, { Component } from 'react';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import '../../style/Checkout.css';
import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@material-ui/core';
import { btnMedium, cursorPointer } from '../../style/GeneralStyle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CartContext } from '../../contexts/CartContext';

import Modal from './Modal';
import { CSSProperties } from '@material-ui/styles';
import '../../style/Form.css';
import Register from './Register';
import Swish from './PaymentMethods/Swish';
  
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
                <Accordion style={form}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    Personal Details
                  </AccordionSummary>
                  <AccordionDetails style={form}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      id="name"
                      label="Name"
                      name="name"
                      autoComplete="name"
                      autoFocus
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      id="phone"
                      label="Phone"
                      name="phone"
                      autoComplete="phone"
                      autoFocus
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      id="email"
                      label="Email Adress"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      id="password"
                      label="Password"
                      type="password"
                      autoComplete="email"
                    />

                    <Button type="submit" variant="contained">
                      Sign Up
                    </Button>
                  </AccordionDetails>
                </Accordion>

                <Accordion style={form}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    Delivery Details
                  </AccordionSummary>
                  <AccordionDetails style={form}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      id="adress"
                      label="Address"
                      name="Address"
                      autoComplete="address"
                      autoFocus
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      id="zip"
                      label="Zip"
                      name="zip"
                      autoComplete="zip"
                      autoFocus
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      id="region"
                      label="Region"
                      name="region"
                      autoComplete="region"
                      autoFocus
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      id="country"
                      label="Country"
                      name="country"
                      autoComplete="country"
                    />

                    <Button type="submit" variant="contained">
                      Sign Up
                    </Button>
                  </AccordionDetails>
                </Accordion>

                <Accordion style={form}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    Payment Details
                  </AccordionSummary>
                  <AccordionDetails style={form}>
                    <FormControl component="fieldset">

                      <RadioGroup aria-label="payment">
                        <FormControlLabel
                          value="Credit Card"
                          control={<Radio />}
                          label="Credit Card"
                        />
                        <FormControlLabel
                          value="Swish"
                          control={<Radio />}
                          label="Swish"
                        />
                        <FormControlLabel
                          value="Bank Transfer"
                          control={<Radio />}
                          label="Bank Transfer"
                        />
                      </RadioGroup>
                    </FormControl>
                    <Button variant="contained" type="submit">
                      Next
                    </Button>
                  </AccordionDetails>
                </Accordion>
                
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
                >
                  Close
                </Button>
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
