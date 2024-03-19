import React, { createContext, useState } from 'react';
import products from '../Components/Assets/products/product_data';

export const ShopContext = createContext(null);

const getCart = () => {
    let cart = {};
    for (const product of products) {
        cart[product.id] = 0;
    }
    return cart;
};

const getFavorites = () => {
    return [];
};

const ShopContextProvider = (props) => {
    // Popup Functionality
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const togglePopup = (message) => {
        setPopupMessage(message);
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 1000); // Hide popup after 2 seconds
    };

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
        // Show popup message
        togglePopup('Added to cart!');
    };
    const removeCart = (productId) => {
        if (cart[productId] > 0) {
            setCart(prevCart => ({
                ...prevCart,
                [productId]: prevCart[productId] - 1
            }));
            // Show popup message
            togglePopup('Removed from cart!');
        }
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
        // Show popup message
        togglePopup('Added to favorites!');
    };
    const removeFavorite = (productId) => {
        setFavorites(prevFavorites => prevFavorites.filter(id => id !== productId));
        // Show popup message
        togglePopup('Removed from favorites!');
    };
    const toggleFavorite = (productId) => {
        if (isFavorite(productId)) {
            removeFavorite(productId);
        } else {
            addFavorite(productId);
        }
    };

    const contextValue = {
        products,
        popupMessage,
        cart,
        getCartCount,
        addCart,
        removeCart,
        favorites,
        getFavoriteCount,
        isFavorite,
        toggleFavorite,
        showPopup
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
