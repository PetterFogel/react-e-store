import { Button, TextField } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles'
import React from 'react'
import '../../../style/Form.css'

const Swish = () => {
    return (
      <div className="modal-container">
        <form className="form">
          <h2 style={{textAlign: 'center'}}>Swish</h2>
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="phone"
            label="Phone Number"
            name="phone"
            autoComplete="phone"
            autoFocus
          />
          <Button variant="contained" type="submit" style={btn}>
            Sign with bankId
          </Button>
        </form>
      </div>
    );
}

export default Swish

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