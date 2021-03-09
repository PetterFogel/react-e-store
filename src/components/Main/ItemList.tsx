import React from 'react'
import Item from './Item';

interface Props {
 object: {
  title: String;
  price: Number;
  id: Number;
 }
}

const ItemList = () => {

    const products = [
      { title: "Nike Air", price: 199.99, id: 1 },
      { title: "Converse", price: 29.99, id: 2 },
      { title: "Sneaky Steve", price: 69.99, id: 3 },
      { title: "Timberland", price: 59.99, id: 4 },
      { title: "Nike Air", price: 199.99, id: 1 },
      { title: "Converse", price: 29.99, id: 2 },
      { title: "Sneaky Steve", price: 69.99, id: 3 },
      { title: "Timberland", price: 59.99, id: 4 },
    ];

    return (
        <div>
            {
                products.map(item => (
                    <Item title={item.title} price={item.price} key={item.id} />
                ))
            }
        </div>
    )
}

export default ItemList
