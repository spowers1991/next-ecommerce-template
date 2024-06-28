import React, { createContext, useContext, useState, useEffect } from 'react';
import addToCart from './actions/addToCart';
import removeFromCart from './actions/removeFromCart';
import updateItem from './actions/updateItem';
import clearCart from './actions/clearCart';
import updateCartInStorage from './actions/updateCartInStorage';

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  let updatedCart;

  // Saves the cart to local storage 
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      updateCartInStorage(cart);
    }
  }, [cart]);

  useEffect(() => {
    //console.log(cart); // Log the updated cart state after each render
  }, [cart]); 

  // Takes the parameter "cartAction" and updates the cart based on the action-type. (e.g. "addToCart")
  const handleCartAction = (cartAction, ...args) => {
    updatedCart = cartAction(cart, ...args);
    setCart(updatedCart)
  };

  // Add new actions( e.g - { addToCart } from /actions/addToCart.js, ) to the ContextProvider, run handleCartAction on the actions to update the Cart.
  return (
    <CartContext.Provider value={{ 
      cart,
        addToCart: (product, quantity, variantId) => handleCartAction(addToCart, product, quantity, variantId),
        removeFromCart: (index) => handleCartAction(removeFromCart, index),
        updateItem: (index, quantity, variantId) => handleCartAction(updateItem, index, quantity, variantId),
        clearCart: () => handleCartAction(clearCart)
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
