import {createContext, useState } from "react";

// 1. Create the Cart Context

export const CartContext = createContext<any> (null);

// 2. create CartContextProvider -> cartProvider

export const CartProvider  = ({children}:any) => {
    const [cart,setCart] = useState([]);
    return(
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    )
}

// 3. Wrap the entire the app component inside CartProvider
