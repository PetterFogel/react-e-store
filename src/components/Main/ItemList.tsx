import React from 'react'
import Item from './Item';
import ProductItem from './ProductItem';
import '../../style/Products.css';



const ItemList = () => {

    const products = [
      { title: "Nike Air", price: 199.99, id: 1, },
      { title: "Converse", price: 29.99, id: 2 },
      { title: "Sneaky Steve", price: 69.99, id: 3 },
      { title: "Timberland", price: 59.99, id: 4 },
    ];
    const productsTwo = [
      { title: "Stan Smith", price: 89.99, id: 5 },
      { title: "Vagabond", price: 79.99, id: 6 },
      { title: "Bluntstone", price: 99.99, id: 7 },
      { title: "Timberland", price: 59.99, id: 8 },
    ];

    return (

      <div className="product-list">
        <div className="product">
          {products.map((item) => (
            <Item title={item.title} price={item.price} key={item.id} />
          ))}
        </div>
        <div className="product">
          {productsTwo.map((item) => (
            <Item title={item.title} price={item.price} key={item.id} />
          ))}
        </div>
      </div>
    );
}

export default ItemList
