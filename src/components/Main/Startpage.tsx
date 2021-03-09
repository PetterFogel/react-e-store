import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/Startpage.css'
import '../../style/General.css'


function Startpage() {
    return (
      <div className="start-container">
        <h1 className="start-title">
          Welcome to&nbsp;
          <span>ShoeWay</span>
        </h1>
        <p className="sub-title">Quality shoes to match your style</p>
        <Link to="/products">
          <button className="btnLarge">Go Shopping</button>
        </Link>
      </div>
    );
}

export default Startpage
