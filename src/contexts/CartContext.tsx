import React, { createContext } from 'react'; 


interface ContextProps {
    cart: object[]
    addToCart: (product: object) => void;
}


export const CartContext = createContext<ContextProps>({
    cart: [], 
    addToCart: () => {}
});