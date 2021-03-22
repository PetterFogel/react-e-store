import { Accordion, AccordionDetails, AccordionSummary, Button, TextField } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles';
import React, { useContext } from 'react'
import { PaymentContext } from '../../../../contexts/PaymentContext';
import { UserContext } from '../../../../contexts/UserContext';

const Creditcard = () => {
  const user = useContext(UserContext)
  const payment = useContext(PaymentContext)
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
              onChange={payment.addCCName}
            />
            <TextField
              margin="normal"
              label="Credit Card Number"
              name="ccnumber"
              variant="outlined"
              required
              InputLabelProps={{ shrink: true }}
              onChange={payment.addCCNumber}
            />
            <TextField
              margin="normal"
              label="Expiration Date"
              name="ccexp"
              variant="outlined"
              required
              InputLabelProps={{ shrink: true }}
              onChange={payment.addExpiration}
            />
            <TextField
              margin="normal"
              label="CVC"
              name="cvc"
              variant="outlined"
              required
              InputLabelProps={{ shrink: true }}
              onChange={payment.addCVC}
            />
          </AccordionDetails>
          <Button onClick={payment.addCCObject} type="submit" variant="contained" style={btn}>
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