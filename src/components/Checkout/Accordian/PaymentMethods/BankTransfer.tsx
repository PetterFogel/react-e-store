import { Button, TextField } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles';
import React from 'react'
import '../../../style/Form.css'

const BankTransfer = () => {
    return (
      <div className="modal-container">
        <form className="form">
          <h2 style={{ textAlign: "center" }}>Bank Transfer</h2>
          <TextField
            margin="normal"
            label="Bank"
            name="bankname"
            variant="outlined"
            required
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="normal"
            label="Clearing Number"
            name="clearingnumber"
            variant="outlined"
            required
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="normal"
            label="Account Number"
            name="accountnumber"
            variant="outlined"
            required
            InputLabelProps={{ shrink: true }}
          />
          <Button variant="contained" type="submit" style={btn}>
            Complete Payment
          </Button>
        </form>
      </div>
    );
}

export default BankTransfer
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