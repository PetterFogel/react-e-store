import { Link } from 'react-router-dom';
import '../../style/Startpage.css'

import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '1.5rem 2.5rem',
      borderRadius: '3rem',
      outline: 'none',
      fontSize: '1.7rem',
      background: '#56EAC6',
      color: '#fff',
      fontWeight: 'bold',
      border: 'none',
      cursor: 'pointer',
      zIndex: 2,
      [theme.breakpoints.down('md')]: {
        padding: "1.1rem 2rem",
        fontSize: '1.3rem',
        zIndex: 2,
      },
      [theme.breakpoints.down('sm')]: {
        padding: "0.8rem 1.7rem",
        fontSize: '1rem',
        zIndex: 2,
      },
    },
  }),
);

function Startpage() {
    const classes = useStyles();
    return (
      <div className="start-container">
        <h1 className="start-title">
          Welcome to&nbsp;
          <span>ShoeWay</span>
        </h1>
        <p className="sub-title">Quality shoes to match your style</p>
        <Link to="/products" style={{textDecoration: 'none', zIndex: 1}}>
          <Button variant="contained" className={classes.root}>Go Shopping</Button>
        </Link>
      </div>
    );
}

export default Startpage
