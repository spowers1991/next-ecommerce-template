const removeFromCart = (cart, index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    return updatedCart;
  };
  
  export default removeFromCart;
  