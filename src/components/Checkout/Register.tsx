import { Avatar, Button, Checkbox, FormControlLabel, TextField } from '@material-ui/core'
import { CSSProperties } from '@material-ui/styles';
import React from 'react'
import '../../style/Form.css'

const Register = () => {
    return (
      <div className="modal-container">
        <h1>Sign up</h1>
        <form className="form">
  
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="firstName"
            label="Firstname"
            name="firstName"
            autoComplete="firstName"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="lastName"
            label="Lastname"
            name="lastName"
            autoComplete="lastName"
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="password"
            label="Password"
            type="password"
            autoComplete="email"
          />
          <FormControlLabel 
          control={<Checkbox value="remember" color="primary"/>}
          label="Remember me"
          />

          <Button type="submit" variant="contained" style={btn}>
            Sign Up
          </Button>
        </form>
      </div>
    );
}

export default Register


const btn: CSSProperties = {
  alignSelf: "center",
  bordeeRadius: "3rem",
  outline: "none",
  fontSize: "1.2rem",
  background: "#56EAC6",
  color: "#fff",
  fontWeight: "bold",
  border: "none",
  cursor: "pointer",
  margin: "1rem",
};