import { extractProductIds } from '@/utils/extractProductIds';

export const filterProducts = (products, selectedOptions) => {

  const filteredProducts = products?.filter(product => {
    return Object.keys(selectedOptions)?.every(property => {
      if (!selectedOptions[property]?.length) {
        // If there are no selected options for this property, skip it
        return true;
      }
      if (!product[property] || !Array.isArray(product[property])) {
        // If the product doesn't have this property or it's not an array, skip it
        return false;
      }
      
      // Remove the 'node' property and extract the IDs
      const productIds = extractProductIds(product[property]);

      // Check if all selected options for this property are included in the product's property array
      return selectedOptions[property]?.every(option => productIds.includes(option));
    });
  });

  return filteredProducts;
}
