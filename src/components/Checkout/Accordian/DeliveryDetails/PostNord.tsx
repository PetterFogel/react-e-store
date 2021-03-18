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
              id="name"
              label="adress"
              name="name"
              key="name"
              type="text"
              autoComplete="name"
              autoFocus
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
            />
            <Button style={btn} variant="contained">
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