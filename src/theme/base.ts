import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
      color: "#004466",
      letterSpacing: "2.5px",
      "@media (max-width:900px)": {
        fontSize: "3rem",
      },
      "@media (max-width:600px)": {
        fontSize: "2rem",
        fontWeight: 600,
      },
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 400,
      color: "#004466",
      letterSpacing: "1px",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 400,
      color: "#333",
      textAlign: "left",
      letterSpacing: "1px",
      "@media (max-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    h4: {
      fontSize: "1.2em",
      fontWeight: 400,
      color: "#333333",
    },
    h5: {
      fontSize: "1em",
      fontWeight: 400,
      color: "#333333",
    },
    h6: {
      fontSize: "0.9em",
      fontWeight: "normal",
      color: "#0A5A7A",
      cursor: "pointer",
      "@media (max-width:600px)": {
        fontSize: "0.8em",
      },
    },
    subtitle1: {
      fontSize: "1.2em",
      color: "#0A5A7A",
    },
    subtitle2: {
      fontSize: "0.8em",
      color: "#333333",
    },
  },
  spacing: 10,
  palette: {
    primary: {
      main: "#00ffa2",
    },
    secondary: {
      main: "#D3D3D3",
    },
    warning: {
      main: "#F9C70C",
    },
    info: {
      main: "#fff",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      variants: [
        {
          props: { variant: "contained" },
          style: { fontWeight: 600, letterSpacing: "1px", borderRadius: "0px" },
        },
      ],
    },
  },
});
