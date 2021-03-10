
import React from 'react'
import Delivery from './Delivery'
import Login from './Login'
import Register from './Register'

const Checkout = () => {
    return (
      <div>
        <div style={{ width: "100%", display: "flex" }}>
          <Register />
          <Login />
        </div>
        <div style={{ width: "100%", display: "flex" }}>
            <Delivery/>
        </div>
      </div>
    );
}

export default Checkout
