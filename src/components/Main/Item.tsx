import React from 'react'

interface Props{

    title: string,
    price: number,
}
const Item = (props: Props) => {


    const addToCart = () => {
        console.log('added')
    }

    return (
        <div>
            <h2>{props.title}</h2>
            <h5>{props.price}</h5>
            <button onClick={addToCart}>Add</button>
        </div>
    )
}

export default Item
