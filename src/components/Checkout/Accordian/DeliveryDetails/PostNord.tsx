import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  TextField,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { CSSProperties } from "@material-ui/styles";



const PostNord = () => {

    const addDetails = () => {
          let today = new Date();
          let tomorrow = new Date();
          tomorrow.setDate(today.getDate() + (Math.floor(Math.random() * 3) + 1));
          console.log(tomorrow);
    }

    return (
      <div>
        <Accordion style={form}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
              <strong>Post Nord</strong>
              <span> 2 - 3 Days</span>
            </div>
          </AccordionSummary>
          <AccordionDetails style={form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="address"
              label="Address"
              name="address"
              key="address"
              type="address"
              autoComplete="address"
              autoFocus
            />
            <TextField
             
              variant="outlined"
              margin="normal"
              required
              id="zip"

              label="zip"
              name="zip"
              type="zip"
              autoComplete="zip"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="region"
              type="region"
              label="region"
              name="region"
              autoComplete="region"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              id="country"
              type="country"
              label="country"
              name="counrty"
              autoComplete="country"
              autoFocus
            />
            <Button onClick={addDetails} style={btn} variant="contained">
              Add
            </Button>
          </AccordionDetails>
        </Accordion>
      </div>
    );
}

export default PostNord

const form: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "1rem 2rem",
  background: "#fff",
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