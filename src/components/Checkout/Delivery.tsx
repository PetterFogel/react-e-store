import {
  Button,
  TextField
} from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";
import React from "react";
import "../../style/Form.css";

const Delivery = () => {
    return (
      <div className="modal-container">
        <h2>Delivery Details</h2>
        <form className="form">
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

          <Button type="submit" variant="contained" style={btn}>
            Submit
          </Button>
        </form>
      </div>
    );
}

export default Delivery


const btn: CSSProperties = {
  alignSelf: "center",
  bordeeRadius: "3rem",
  outline: "none",
  fontSize: "1.2rem",
  background: "#56EAC6",
  color: "#fff",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  margin: "1rem",
};