import { Accordion, AccordionDetails, AccordionSummary, Button, TextField } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles';
import React from 'react'


const Swish = () => {
    return (
      <div style={{margin: '1rem 0rem'}}>
        <Accordion>
          <AccordionSummary>
            <strong>Swish</strong>
          </AccordionSummary>
          <AccordionDetails style={container}>
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
          </AccordionDetails>
          <Button variant="contained" type="submit" style={btn}>
            Sign with bankId
          </Button>
        </Accordion>
      </div>
    );
}

export default Swish

const container: CSSProperties = {
  width: "20rem",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
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