import { extractPropertyValues } from '@/utils/extractPropertyValues';

export const filterProducts = (products, selectedOptions) => {

  const filteredProducts = products?.filter(product => {
    return Object.keys(selectedOptions)?.every(property => {   
      if (!selectedOptions[property]?.length) {
        // If there are no selected options for this property, skip it
        return true;
      }
      if (!product[property]) {
        // If the product doesn't have this property skip it
        return false;
      }
      if (!Array.isArray(product[property])) {
          const propertyValue = product[property].toLowerCase().replace(/\s+/g, '-')
          const term = selectedOptions[property][0].toLowerCase().replace(/\s+/g, '-')
          // Check if the selected option for this property is included in the product's property vAlue
          if( propertyValue.includes(term) ){
            return product
          }
      } else {
        // Remove the 'node' property and extract the IDs
        const propertyValues = extractPropertyValues(product[property]);
        // Check if all selected options for this property are included in the product's property array
        return selectedOptions[property]?.every(option => propertyValues.includes(option));
      }
    });
  });

  return filteredProducts;
}
