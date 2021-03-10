
import React from 'react'
import Login from './Login'
import Register from './Register'

const Checkout = () => {
    return (
        <div style={{width: '100%', display: 'flex'}}>
            <Register/>
            <Login/>
        </div>
    )
}

export default Checkout
