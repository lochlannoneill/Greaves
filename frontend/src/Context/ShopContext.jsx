import React from 'react'
import products from '../Components/Assets/products/product_data'
import { createContext } from 'react'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    
    const contextValue = {products};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;