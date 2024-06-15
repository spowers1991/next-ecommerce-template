const updateItem = (cart, product, quantity, selectedVariantId) => {
  // Make a copy of the current cart to avoid mutating the original state

  let updatedCart = [...cart];
  
  // Find the product in the cart
  let cartProduct = updatedCart.find(item => item.id === product.id);
  
  if (cartProduct) {
    if (selectedVariantId) {
      // Product already exists in the cart, update the matching variant's quantity if selectedVariantId is provided
      cartProduct.variants = cartProduct.variants.map(variant => {
        if (variant.node.id === selectedVariantId) {
          // Update the matching variant's quantity
          variant.node.quantity = quantity; // Directly set the quantity in updateItem
        }
        return variant;
      });

      // Update the product's total quantity based on the variants' quantities
      cartProduct.quantity = cartProduct.variants.reduce((total, variant) => total + variant.node.quantity, 0);
    } else {
      // If no selectedVariantId is provided, only update the product's total quantity
      cartProduct.quantity = quantity;
    }
  } else {
    // Product does not exist in the cart, add it
    let newProduct = { ...product }; // Make a copy of the product to avoid mutating the original object

    if (selectedVariantId) {
      // Set the quantities for variants based on the selectedVariantId
      newProduct.variants = newProduct.variants.map(variant => {
        if (variant.node.id === selectedVariantId) {
          variant.node.quantity = quantity; // Set the quantity for the matching variant
        } else {
          variant.node.quantity = 0; // Initialize quantity for non-matching variants
        }
        return variant;
      });

      // Set the total quantity for the new product based on the variants' quantities
      newProduct.quantity = newProduct.variants.reduce((total, variant) => total + variant.node.quantity, 0);
      
    } else {

      newProduct.quantity = quantity;

    }
    
    // Add the new product to the cart
    updatedCart.push(newProduct);
  }

  return updatedCart;
};

export default updateItem;
