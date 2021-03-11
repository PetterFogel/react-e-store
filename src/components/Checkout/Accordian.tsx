import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { CSSProperties } from "@material-ui/styles";


const Accordian = () => {
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
              autoComplete="name"
              autoFocus
            />
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
            <Button style={btn} type="submit" variant="contained">
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

            <Button style={btn} type="submit" variant="contained">
              Add
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
            <Button style={btn} variant="contained" type="submit">
              Next
            </Button>
          </AccordionDetails>
        </Accordion>
      </div>
    );
}

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


export default Accordian


