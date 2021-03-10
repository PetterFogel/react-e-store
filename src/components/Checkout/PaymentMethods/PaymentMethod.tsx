import React from 'react'
import '../../../style/Form.css'

const PaymentMethod = () => {
    return <div className="modal-container">
        <h3 style={{fontSize: '1.4rem', margin: '1rem'}}>Choose payment method</h3>
        <div className="container">Credit card</div>
        <div className="container">Swish</div>
        <div className="container">Bank Transfer</div>
    </div>;
}

export default PaymentMethod
