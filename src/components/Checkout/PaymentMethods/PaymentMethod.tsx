import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles';
import React from 'react'
import '../../../style/Form.css'

const PaymentMethod = () => {
    return (
      <div className="modal-container">
        <h3 style={{ fontSize: "1.2rem", margin: "1rem" }}>
          Choose payment method
        </h3>
        <FormControl component="fieldset">
          <FormLabel component="legend">Payment Method</FormLabel>
          <RadioGroup aria-label="payment">
            <FormControlLabel
              value="Credit Card"
              control={<Radio />}
              label="Credit Card"
            />
            <FormControlLabel value="Swish" control={<Radio />} label="Swish" />
            <FormControlLabel
              value="Bank Transfer"
              control={<Radio />}
              label="Bank Transfer"
            />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" type="submit" style={btn}>
          Next
        </Button>
      </div>
    );
}

export default PaymentMethod


const btn: CSSProperties = {
  alignSelf: "center",
  bordeeRadius: "3rem",
  outline: "none",
  fontSize: "1rem",
  background: "#56EAC6",
  color: "#fff",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  margin: "1rem",
  padding: "1rem",
};