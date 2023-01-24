import { CSSProperties } from "@mui/styles";
import { Button, TextField, Checkbox, FormControlLabel } from "@mui/material";
import "../../style/Form.css";

const Register = () => {
  return (
    <div className="modal-container">
      <h2>Sign up</h2>
      <form className="form">
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
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button type="submit" variant="contained" style={btn}>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

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

export default Register;
