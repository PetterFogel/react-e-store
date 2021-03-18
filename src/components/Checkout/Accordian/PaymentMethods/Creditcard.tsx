import { Accordion, AccordionDetails, AccordionSummary, Button, TextField } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles';
import React from 'react'

const Creditcard = () => {
    return (
      <div>
        <Accordion>
          <AccordionSummary style={{ textAlign: "center" }}>
            <strong>Creditcard</strong>
          </AccordionSummary>
          <AccordionDetails style={container}>
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
          </AccordionDetails>
          <Button type="submit" variant="contained" style={btn}>
            {" "}
            Complete Payment{" "}
          </Button>
        </Accordion>
      </div>
    );
}

export default Creditcard

const container: CSSProperties = {
 width: '20rem',
  textAlign: 'center',
 margin: '.5rem 0rem',
 display: 'flex',
 justifyContent: 'center',
 flexDirection: 'column'
}

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