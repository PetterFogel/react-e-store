import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { CSSProperties } from "@material-ui/styles";

const PaymentDetails = () => {
    return (
        <div>
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
    )
}

export default PaymentDetails


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