import stripNodeProperty from '@/utils/stripNodeProperty';

export function getFilterOptions(products, property) {
  const seenIds = new Set();
  const uniqueOptions = [];

  products.forEach(product => {
    const options = stripNodeProperty(product[property]);
    options?.forEach(option => {
      if (!seenIds.has(option.id)) {
        seenIds.add(option.id);
        uniqueOptions.push(option);
      }
    });
  });

  return uniqueOptions;
}
