export const getOptionValuesMap = (variants) => {
    return variants?.reduce((acc, variant) => {
      variant.node.selectedOptions.forEach(option => {
        if (!acc[option.name]) {
          acc[option.name] = new Set();
        }
        acc[option.name].add(option.value);
      });
      return acc;
    }, {}) || {};
  };
  
  export const getUniqueOptions = (optionValuesMap) => {
    return Object.entries(optionValuesMap).map(([name, valuesSet]) => ({
      name,
      values: Array.from(valuesSet)
    }));
  };
  
  export const getInitialSelectedOptions = (uniqueOptions) => {
    return uniqueOptions.reduce((acc, option) => {
      acc[option.name] = option.values[0];
      return acc;
    }, {});
  };
  
  export const findMatchingVariant = (variants, selectedOptions) => {
    return variants?.find(variant => {
      return variant.node.selectedOptions.every(option => {
        return selectedOptions[option.name] === option.value;
      });
    });
  };
  