import React, { useEffect } from 'react';
import { useFilter } from '@/lib/contexts/filter/FilterContext';
import { updateFilterOptions } from '@/lib/contexts/filter/actions/updateFilterOptions';
import { updateCheckboxOptions } from '@/lib/contexts/filter/selectors/updateCheckboxOptions';
import { getFilterOptions } from '@/lib/contexts/filter/helpers/getFilterOptions';

const CheckboxSelector = ({ propertyName }) => {
  const { products, filterOptions, setFilterOptions, selectedOptions, setSelectedOptions } = useFilter();

  useEffect(() => {
   updateFilterOptions(propertyName, getFilterOptions(products, propertyName), setFilterOptions);
  }, [products, setFilterOptions]);

  const handleChange = (event) => {
    updateCheckboxOptions(event, setSelectedOptions, propertyName);
  };

  return (
    <div className='flex flex-col gap-y-2'>
      <label className='font-bold capitalize'>{propertyName}:</label> 
      {filterOptions[propertyName] && filterOptions[propertyName].map((option, index) => (
        <div key={index} className='flex gap-x-1'>
          <input
            type="checkbox"
            id={option.id}
            name={option.id}
            value={option.id}
            checked={selectedOptions[propertyName]?.includes(option.id) || false} // Ensure it is always a boolean
            onChange={handleChange}
          />
          <label htmlFor={option.id}>{option.title}</label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxSelector;
