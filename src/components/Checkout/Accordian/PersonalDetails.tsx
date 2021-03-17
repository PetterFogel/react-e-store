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

class PersonalDetails extends Component {
  context!: React.ContextType<typeof UserContext>;
  static contextType = UserContext;

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
              type="phone"
              label="Phone"
              name="phone"
              key="phone"
              autoComplete="phone"
              autoFocus
              onChange={this.context.addPhone}
            />
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
            <Button
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


export default PersonalDetails


const form: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "1rem 2rem",
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
  margin: "1rem",
  padding: "1rem",
};