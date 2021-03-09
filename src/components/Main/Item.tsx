import React from 'react'
import '../../style/Products.css';

interface Props{

    title: string,
    price: number,
}
const Item = (props: Props) => {

    const addToCart = () => {
        console.log('added')
    }

    return (
        <div className="product-container">
            <h2 className="title">{props.title}</h2>
            <h4 className="price">{props.price}</h4>
            <button className="add-btn" onClick={addToCart}>Add</button>
        </div>
    )
}

export default Item
