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
    const isFavorite = (productId) => {
        return favorites.includes(productId);
      };
    const addFavorite = (productId) => {
        setFavorites(prevFavorites => {
            const updatedFavorites = new Set([...prevFavorites, productId]);
            return Array.from(updatedFavorites);
        });
    }
    const removeFavorite = (productId) => {
        setFavorites(prevFavorites => prevFavorites.filter(id => id !== productId));
    }
    const toggleFavorite = (productId) => {
        if (isFavorite(productId)) {
          removeFavorite(productId);
        } else {
          addFavorite(productId);
        }
      };    

    const contextValue = {products, cart, getCartCount, addCart, removeCart, favorites, getFavoriteCount, isFavorite, addFavorite, removeFavorite, toggleFavorite};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
