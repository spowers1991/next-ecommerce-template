import React, { createContext, useContext, useState, useEffect } from 'react';
import { filterProducts } from '@/lib/contexts/filter/actions/filterProducts'; 

const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children, products }) => {
  const [filterOptions, setFilterOptions] = useState({
    title: undefined,
    collections: [], 
    price: undefined,
    variants: [],
    seo: undefined,
    // Add more options as needed
  });

  const [selectedOptions, setSelectedOptions] = useState({
    title: undefined,
    collections: [],
    price: undefined,
    variants: [],
    seo: undefined,
    // Add more filters as needed
  });

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(filterProducts(products, selectedOptions));
    console.log(filteredProducts)
  }, [selectedOptions, products]);

  const clearFilter = () => {
    setSelectedOptions({
      collections: [],
      price: null,
      variants: [],
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
      setFilteredProducts,
      products 
    }}>
      {children}
    </FilterContext.Provider>
  );
};

