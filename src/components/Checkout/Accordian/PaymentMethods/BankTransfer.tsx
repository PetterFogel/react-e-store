import { Accordion, AccordionDetails, AccordionSummary, Button, TextField } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles';
import React, { useContext } from 'react'
import { UserContext } from '../../../../contexts/UserContext';

const BankTransfer = () => {
  const user = useContext(UserContext)

    return (
      <div>
        <Accordion>
          <AccordionSummary>
            <strong>Bank Transfer</strong>
          </AccordionSummary>
          <AccordionDetails style={container}>
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
          </AccordionDetails>
          <Button onClick={() => user.filledState(true)} variant="contained" type="submit" style={btn}>
            Complete Payment
          </Button>
        </Accordion>
      </div>
    );
}

export default BankTransfer

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