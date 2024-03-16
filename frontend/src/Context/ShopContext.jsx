import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import products from '../Components/Assets/products/product_data'

export const ShopContext = createContext(null);

const getCart = () => {
    let cart = {};
    for (const product of products) {
        cart[product.id] = 0;
    }
    return cart;
}

const getFavorites = () => {
    let favorites = {};
    for (const product of products) {
        favorites[product.id] = 0;
    }
    return [];
}

const ShopContextProvider = (props) => {
    // Cart Functionality
    const [cart, setCart] = useState(getCart());
    const getCartCount = () => {
        let count = 0;
        Object.values(cart).forEach(quantity => {
            count += quantity;
        });
        return count;
    };
    const addCart = (productId) => {
        setCart(prevCart => ({
            ...prevCart,
            [productId]: prevCart[productId] + 1
        }));
        console.log(cart);
    };
    const removeCart = (productId) => {
        if (cart[productId] > 0) {
            setCart(prevCart => ({
                ...prevCart,
                [productId]: prevCart[productId] - 1
            }));
        }
        console.log(cart);
    };

    // Favorites Functionality
    const [favorites, setFavorites] = useState(getFavorites());
    const getFavoriteCount = () => {
        return favorites.length;
    };
    const addFavorite = (productId) => {
        setFavorites([...favorites, productId])
    }
    const removeFavorite = (productId) => {
        setFavorites(favorites.filter(id => id !== productId))
    }

    const contextValue = {products, cart, getCartCount, addCart, removeCart, favorites, getFavoriteCount, addFavorite, removeFavorite};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
