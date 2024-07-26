const removeFromCart = (cart, product, selectedVariantId) => {

  // Create a copy of the cart to avoid mutating the original cart
  const updatedCart = [...cart];

  // Find the product in the cart
  const productIndex = updatedCart.findIndex(item => item.id === product.id);

  if (productIndex !== -1) {
    // Get the product from the cart
    const cartProduct = updatedCart[productIndex];
    let totalQuantityOfVariants = 0;

    // Find the specific variant with the selectedVariantId and reset its quantity to zero
    cartProduct.variants.forEach(variant => {
      if (variant.node && variant.node.id === selectedVariantId) {
        totalQuantityOfVariants += variant.node.quantity;
        variant.node.quantity = 0;
      }
    });

    // Update the product's total quantity
    product.quantity -= totalQuantityOfVariants;

    // Remove the product from the cart if its total quantity is less than 1
    if (product.quantity < 1) {
      updatedCart.splice(productIndex, 1);
    } else {
      // Update the product in the cart
      updatedCart[productIndex] = cartProduct;
    }
  }

  return updatedCart;
};

export default removeFromCart;
