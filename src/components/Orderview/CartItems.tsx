import React, { Component } from 'react'
import { CartContext } from '../../contexts/CartContext';
import '../../style/cartItems.css'

class CartItems extends Component {
    context!: React.ContextType<typeof CartContext>;
    static contextType = CartContext;
    
    render() {
        const newCart = [...this.context.cart]
        return(
            <div className="orderView-container">
                {newCart.map((product) => 
                <div className="order-div">
                    <h3>{product.title}</h3>
                    <img src={product.image}></img>
                    <p>{product.price}</p>
                    <p>{product.quantity}</p>
                </div>
                )}
            </div>
        )
    }
}

export default CartItems;