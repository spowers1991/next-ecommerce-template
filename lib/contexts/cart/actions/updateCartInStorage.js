const updateCartInStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  export default updateCartInStorage;
  