import React, { useState, useEffect } from 'react';
import { useFilter } from '@/lib/contexts/filter/FilterContext';
import { getFilterOptions } from '@/lib/contexts/filter/helpers/getFilterOptions';
import { updateFilterOptions } from '@/lib/contexts/filter/actions/updateFilterOptions';
import { updateSearchBar } from '@/lib/contexts/filter/selectors/updateSearchBar';

const SearchBar = ({ propertyName }) => {
  const { products, setFilterOptions, setSelectedOptions, setFilteredProducts } = useFilter();

  const [searchTerm, setSearchTerm] = useState('');
  const [ productsWithSearchTerm ] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter(product => 
      product[propertyName]?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  }, [products, searchTerm, propertyName]);

  useEffect(() => {
   updateFilterOptions(propertyName, getFilterOptions(productsWithSearchTerm, propertyName, searchTerm), setFilterOptions);
  }, [products, setFilterOptions]);

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    updateSearchBar(newSearchTerm, setSelectedOptions, propertyName);
  };

  return (
    <div className='flex flex-col gap-y-2'>
      <label className='font-bold capitalize'>{propertyName}:</label> 
      <div className='mb-4'>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          className='p-2 border rounded'
        />
      </div>
    </div>
  );
};

export default SearchBar;
