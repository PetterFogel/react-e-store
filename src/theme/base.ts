import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "'Source Sans Pro', 'sans-serif'",
    h1: {
      fontSize: "4rem",
      fontWeight: 600,
      color: "#333",
      letterSpacing: "4px",
      "@media (max-width:900px)": {
        fontSize: "3rem"
      },
      "@media (max-width:600px)": {
        fontSize: "2rem",
        fontWeight: 600
      }
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 400,
      color: "#333",
      letterSpacing: "1px",
      "@media (max-width:600px)": {
        fontSize: "1.5rem"
      }
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 400,
      color: "#333",
      textAlign: "left",
      letterSpacing: "1px",
      "@media (max-width:600px)": {
        fontSize: "1.2rem"
      }
    },
    h4: {
      fontSize: "0.9em",
      fontWeight: "normal",
      color: "#0A5A7A",
      cursor: "pointer",
      "@media (max-width:600px)": {
        fontSize: "0.8em"
      }
    },
    h5: {
      fontSize: "0.7rem",
      fontWeight: 600,
      color: "#333",
      letterSpacing: "1px",
      "@media (max-width:600px)": {
        fontSize: "0.5rem"
      }
    },
    h6: {
      fontSize: "0.9rem",
      fontWeight: 400,
      color: "#333",
      "@media (max-width:600px)": {
        fontSize: "0.6rem"
      }
    },
    subtitle1: {
      color: "#333",
      fontSize: "0.8rem",
      letterSpacing: "0.5px",
      fontWeight: 600
    },
    subtitle2: {
      color: "#333",
      fontSize: "0.8rem",
      letterSpacing: "0.5px",
      fontWeight: 400
    }
  },
  spacing: 10,
  palette: {
    primary: {
      main: "#333"
    },
    secondary: {
      main: "#A4A4A4"
    },
    warning: {
      main: "#F9C70C"
    },
    info: {
      main: "#fff"
    },
    success: {
      main: "#00ffa2"
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      variants: [
        {
          props: { variant: "text" },
          style: { fontWeight: 600, letterSpacing: "1px", borderRadius: "0px" }
        },
        {
          props: { variant: "contained" },
          style: {
            fontWeight: 600,
            letterSpacing: "1px",
            borderRadius: "0px",
            background: "#222",
            color: "#fff"
          }
        },
        {
          props: { variant: "outlined" },
          style: {
            fontWeight: 600,
            letterSpacing: "1px",
            borderRadius: "0px",
            background: "#fff",
            color: "#333",
            border: "1px solid #333"
          }
        }
      ]
    },
    MuiTableCell: {
      variants: [
        {
          props: { variant: "head" },
          style: {
            fontSize: "0.9rem",
            fontWeight: 600,
            "@media (max-width:900px)": {
              fontSize: "0.8rem",
              fontWeight: 500
            }
          }
        },
        {
          props: { variant: "body" },
          style: {
            fontSize: "0.8rem"
          }
        }
      ]
    }
  }
});
