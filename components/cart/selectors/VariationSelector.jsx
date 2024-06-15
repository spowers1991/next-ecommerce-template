import React, { useState, useEffect } from 'react';
import { useProduct } from '@/lib/contexts/product/ProductContext';
import { getOptionValuesMap, getUniqueOptions, getInitialSelectedOptions, findMatchingVariant } from '@/lib/contexts/product/selectors/variationLogic';

const VariationSelector = ({ onVariantChange }) => {
  const { product } = useProduct();

  const optionValuesMap = getOptionValuesMap(product?.variants);
  const uniqueOptions = getUniqueOptions(optionValuesMap);
  const [selectedOptions, setSelectedOptions] = useState(getInitialSelectedOptions(uniqueOptions));

  useEffect(() => {
    const matchingVariant = findMatchingVariant(product?.variants, selectedOptions);
    if (matchingVariant) {
      onVariantChange(matchingVariant?.node?.id);
    } else {
      onVariantChange(null);
    }
  }, [selectedOptions, product?.variants, onVariantChange]); // Note: Corrected product?.node?.variants to product?.variants

  const handleChange = (name, value) => {
    setSelectedOptions(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    uniqueOptions.map(({ name, values }, index) => (
      <div key={index} className='uppercase text-sm font-normal'>
        <label htmlFor={name}>{name}: </label>
        <select
          name={name}
          id={name}
          className='uppercase text-sm font-bold'
          value={selectedOptions[name]}
          onChange={(e) => handleChange(name, e.target.value)}
        >
          {values.map((value, valueIndex) => (
            <option key={valueIndex} value={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    ))
  );
};

export default VariationSelector;
