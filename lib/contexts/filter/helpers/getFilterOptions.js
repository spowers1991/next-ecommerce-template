import stripNodeProperty from '@/utils/stripNodeProperty';

export function getFilterOptions(products, property, searchTerm) {
  const seenIds = new Set();
  const uniqueOptions = [];

  products.forEach(product => {
    if(product[property]) {
      const options = stripNodeProperty(product[property]);

      options?.forEach(option => {
        if (!seenIds.has(option[searchTerm])) {
          seenIds.add(option[searchTerm]);
          uniqueOptions.push(option);
        }
      });
    } 
  });


  return uniqueOptions;
}
