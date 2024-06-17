import React, { createContext, useContext, useState, useEffect } from 'react';
import { filterProducts } from '@/lib/contexts/filter/actions/filterProducts'; 

const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children, products }) => {
  const [filterOptions, setFilterOptions] = useState({
    collections: null, 
    price: null,
    // Add more options as needed
  });

  const [selectedOptions, setSelectedOptions] = useState({
    collections: [], // Initialize as an empty array
    price: null,
    // Add more filters as needed
  });

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(filterProducts(products, selectedOptions));
    console.log(filterOptions)
  }, [selectedOptions, products]);

  const clearFilter = () => {
    setSelectedOptions({
      collections: [],
      price: null,
      // Clear other filters as needed
    });
  };

  return (
    <FilterContext.Provider value={{ 
      filterOptions,
      setFilterOptions,
      selectedOptions,
      setSelectedOptions,
      clearFilter,
      filteredProducts,
      products 
    }}>
      {children}
    </FilterContext.Provider>
  );
};

