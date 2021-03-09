import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/Startpage.css'


function Startpage() {
    return (
      <div className="start-container">
        <h1 className="start-title">
          Welcome to&nbsp;
          <span>ShoeWay</span>
        </h1>
        <p className="sub-title">Quality shoes to match your style</p>
        <Link to="/products">
          <button className="start-btn">Go Shopping</button>
        </Link>
      </div>
    );
}

export default Startpage
