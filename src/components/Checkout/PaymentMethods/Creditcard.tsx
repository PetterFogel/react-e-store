import { Button, TextField } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles';
import React from 'react'
import '../../../style/Form.css'

const Creditcard = () => {
    return (
      <div className="modal-container">
        <h2>Credit Card</h2>
        <form className="form">
          <TextField
            margin="normal"
            label="Credit Card name"
            name="ccname"
            variant="outlined"
            required
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="normal"
            label="Credit Card Number"
            name="ccnumber"
            variant="outlined"
            required
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="normal"
            label="Expiration Date"
            name="ccexp"
            variant="outlined"
            required
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="normal"
            label="CVC"
            name="cvc"
            variant="outlined"
            required
            InputLabelProps={{ shrink: true }}
          />
          <Button type="submit" variant="contained" style={btn}> Complete Payment </Button>
        </form>
      </div>
    );
}

export default Creditcard


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
  padding: '1rem',
};