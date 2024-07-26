import getSelectedVariant from '@/lib/contexts/product/helpers/getSelectedVariant';
import getStock from '@/lib/contexts/product/helpers/getStock';

const addToCart = (cart, product, quantity, selectedVariantId) => {
  // Make a copy of the current cart to avoid mutating the original state
  let updatedCart = [...cart];
  
  // Find the product in the cart
  let cartProduct = updatedCart.find(item => item.id === product.id);
  
  if (cartProduct) {
    if (selectedVariantId) {
      // Product already exists in the cart, update the matching variant's quantity if selectedVariantId is provided
      let selectedVariant = getSelectedVariant(cartProduct, selectedVariantId);

      if (selectedVariant) {
        if (getStock(cartProduct, selectedVariant)) {
          // Update the matching variant's quantity
          selectedVariant.node.quantity += quantity;

          // Update the product's total quantity based on the variants' quantities
          cartProduct.quantity = cartProduct.variants.reduce((total, variant) => total + variant.node.quantity, 0);
        } else {
          console.log('Selected variant or product is out of stock.');
        }
      }
    } else {
      // If no selectedVariantId is provided, only update the product's total quantity
      cartProduct.quantity += quantity;
    }
  } else {
    // Product does not exist in the cart, add it
    let newProduct = { ...product, quantity: 0, variants: product.variants.map(variant => ({ ...variant })) }; // Make a deep copy of the product and its variants

    if (selectedVariantId) {
      let selectedVariant = getSelectedVariant(newProduct, selectedVariantId);

      if (selectedVariant && getStock(newProduct, selectedVariant)) {
        // Set the quantities for variants based on the selectedVariantId
        selectedVariant.node.quantity = quantity;

        // Set the total quantity for the new product based on the variants' quantities
        newProduct.quantity = newProduct.variants.reduce((total, variant) => total + variant.node.quantity, 0);
        
        // Add the new product to the cart
        updatedCart.push(newProduct);
      } else {
        console.log('Selected variant or product is out of stock.');
      }
    } else {
      newProduct.quantity = quantity;
      // Add the new product to the cart
      updatedCart.push(newProduct);
    }
  }

  return updatedCart;
};

export default addToCart;
