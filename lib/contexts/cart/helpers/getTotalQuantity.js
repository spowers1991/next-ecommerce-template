export const getTotalQuantity = (cart) => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };
  