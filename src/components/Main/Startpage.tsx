import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/Startpage.css'

import { btnLarge } from '../../style/GeneralStyle'
import { Button } from '@material-ui/core';


function Startpage() {
    return (
      <div className="start-container">
        <h1 className="start-title">
          Welcome to&nbsp;
          <span>ShoeWay</span>
        </h1>
        <p className="sub-title">Quality shoes to match your style</p>
        <Link to="/products" style={{textDecoration: 'none'}}>
          <Button variant="contained" style={btnLarge}>Go Shopping</Button>
        </Link>
      </div>
    );
}

export default Startpage
