import React from 'react'
import { Link } from 'react-router-dom';
import '../../style/Products.css';

interface Props{
  object: {
    title: string, 
    price: string, 
    image: string
    }
}
const Item = (props: Props) => {

    const addToCart = () => {
        console.log('added')
    }

    return (
      <div className="product-item">
        <h2 className="title">{props.object.title}</h2>
        <img className="product-image" src={props.object.image} alt=""/>
        <h4 className="price">{props.object.price}</h4>
        <Link to={"/" + props.object.title}>
          <button className="add-btn" onClick={addToCart}>
            More info...
          </button>
        </Link>
      </div>
    );
}

export default Item
