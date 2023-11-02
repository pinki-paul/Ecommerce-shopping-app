import React, { createContext, useState } from 'react';
import PRODUCTS from '../products';


export const ShopContext = createContext(null);

//this function handle everything whenever anything will change in the Products.js array.
function getDefaultCart() {
    let cart = {};

    for (let i = 0; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

export function ShopContextProvider(props) {

    const [cartItems, setCartItems] = useState(getDefaultCart());


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };


    function addToCart(itemId) {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }


    function removeFromCart(itemId) {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    function updateCartItemCount(newAmount, itemId) {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
    }

    // console.log(cartItems);

    const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount };
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
};

