import React, { Component } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextField,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { CSSProperties } from "@material-ui/styles";
import { UserContext } from '../../../contexts/UserContext'
import { eventNames } from "node:process";

class PersonalDetails extends Component {
  context!: React.ContextType<typeof UserContext>;
  static contextType = UserContext;
  submitCallback() {
    
  }
  render() {
    return (
      <div>
        <Accordion style={form}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Personal Details
          </AccordionSummary>
          <AccordionDetails style={form}>
            <div style={{ display: "flex" }}>
              <div style={textfieldsDiv}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="name"
                label="Name"
                name="name"
                key="name"
                type="text"
                autoComplete="name"
                autoFocus
                onChange={this.context.addName}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="adress"
                key="adress"
                label="Address"
                name="address"
                type="text"
                autoComplete="address"
                autoFocus
                onChange={this.context.addAdress}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="phone"
                type="tel"
                label="Phone"
                name="phone"
                key="phone"
                autoComplete="phone"
                autoFocus
                onChange={this.context.addPhone}
              />
              </div>
              <div style={textfieldsDiv}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="email"
                type="email"
                label="Email Adress"
                name="email"
                key="email"
                autoComplete="email"
                autoFocus
                onChange={this.context.addEmail}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                id="zip"
                label="zip"
                name="zip"
                type="number"
                autoComplete="zip"
                autoFocus
                onChange={this.context.addZip}
              />
              </div>
            </div>
            <Button
              type='submit'
              onClick={this.context.addToObject}
              style={btn}
              variant="contained"
            >
              Add
            </Button>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
}

const textfieldsDiv: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  margin: "0.5rem"

}

const form: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "1rem",
  background: "lightgrey",
  fontSize: "1.2rem",
};

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
  padding: "1rem",
};

export default PersonalDetails