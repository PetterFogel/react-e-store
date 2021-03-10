import React, { createContext } from 'react'; 


interface ContextProps {
    cart: any[]
    addToCart: (product: object) => void;
}


export const CartContext = createContext<ContextProps>({
    cart: [], 
    addToCart: () => {}
});