import React from 'react';
import '../../style/Startpage.css'

function Startpage() {
    return (
        <div className="start-container">
            <h1 className="start-title">
                Welcome to&nbsp;
                <span>
                    ShoeWay
                </span>
            </h1>
            <p className="sub-title">Quality shoes to match your style</p>
            <button className="start-btn">Go Shopping</button>
        </div>
    )
}

export default Startpage
