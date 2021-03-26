import { Accordion, AccordionDetails, AccordionSummary, Button, TextField } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles';
import React, { ChangeEvent, useContext, useState } from 'react'
import { PaymentContext } from '../../../../contexts/PaymentContext';

const Creditcard = () => {
  const payment = useContext(PaymentContext)

  const [nameError, setNameError] = useState("")
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(!/^[a-zA-Z]+$/.test(e.target.value)){
      setNameError('Please type in a correct Cardname')
    } else {
      setNameError("")
    }
    payment.addCCName(e)
  }

  const [numberError, setNumberError] = useState("");
  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!/^(?:[0-9]{16}|[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4})$/.test(e.target.value)) {
      setNumberError("Type in like 1111222233334444 or 1111-2222-3333-4444");
    } else {
      setNumberError("")
    }
    payment.addCCNumber(e);
  }

  const [cvcError, setCVCError] = useState("")
  const handleCVCChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(!/^(?=(\D*\d){3}\D*$)/.test(e.target.value)) {
      setCVCError("CVC contains 3 digits like 111")
    } else {
      setCVCError('')
    }
    payment.addCVC(e)
  }
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
              onChange={handleNameChange}
              helperText={nameError}
              error={Boolean(nameError)}
            />
            <TextField
              margin="normal"
              label="Credit Card Number"
              name="ccnumber"
              variant="outlined"
              required
              InputLabelProps={{ shrink: true }}
              // onChange={payment.addCCNumber}
              onChange={handleNumberChange}
              helperText={numberError}
              error={Boolean(numberError)}
            />
            <TextField
              margin="normal"
              label="Expiration Date"
              name="ccexp"
              variant="outlined"
              type="month"
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
              onChange={handleCVCChange}
              helperText={cvcError}
              error={Boolean(cvcError)}
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